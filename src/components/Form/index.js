import React, { useState } from "react";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import moment from "moment-timezone";
import { AnimatePresence } from "framer-motion";
import DOMPurify from "dompurify";
import Input from "components/Mobile/Input";
import Select from "components/Mobile/Select";
import CloseIcon from "assets/images/icons/close.svg";
import { months, inclusiveRange } from "services/utils";
import API from "services/api";
import variants from "./variants";
import Container, {
  FormContainer,
  Header,
  CloseButton,
  Page,
  Success,
  InputRow,
  SelectRow,
  FormButtonRow,
  FormButton,
  Message,
} from "./styles";

moment.tz.setDefault("America/New_York");

const Form = ({ showForm, categories }) => {
  const history = useHistory();
  const purify = (value) => DOMPurify.sanitize(value);
  const addLeadingZero = (value) =>
    value.toString().length > 1 ? value.toString() : `0${value}`;

  const [page, setPage] = useState(1);

  const addTimer = async (_values) => {
    try {
      const dateTimeString = `${_values.date.year}-${_values.date.month}-${_values.date.day} ${_values.time.hour}:${_values.time.minute}:00 ${_values.time.period}`;
      const parsed = moment(dateTimeString, "YYYY-MM-DD h:mm:ss A");
      const data = {
        title: purify(_values.title),
        description: purify(_values.description),
        category_id: _values.category_id,
        date: parsed.utc().format(),
        url: purify(_values.url),
      };
      await API.postNewTimer({
        data,
      });
      setPage(2);
      setSubmitting(false);
      return setTimeout(() => {
        showForm(false);
      }, 3000);
    } catch (e) {
      console.log(e.response);
      setSubmitting(false);
      showForm(false);
      return history.push("/error");
    }
  };

  const dateSchema = Yup.object().shape({
    month: Yup.string().required("*"),
    day: Yup.string().required("*"),
    year: Yup.string().required("*"),
  });

  const timeSchema = Yup.object().shape({
    hour: Yup.string().required("*"),
    minute: Yup.string().required("*"),
    period: Yup.string().required("*"),
  });

  const formSchema = Yup.object().shape({
    title: Yup.string().required("*").max(255, "Maximum length of 255 chars"),
    description: Yup.string()
      .required("*")
      .max(1000, "Maximum length of 1000 chars"),
    category_id: Yup.number().required("*"),
    date: dateSchema,
    time: timeSchema,
    url: Yup.string().url("Invalid URL").required("*"),
  });

  const {
    values,
    touched,
    errors,
    handleSubmit,
    handleChange,
    isSubmitting,
    setSubmitting,
    setFieldValue,
  } = useFormik({
    initialValues: {
      title: "",
      description: "",
      category_id: "",
      date: { month: "", day: "", year: "" },
      time: { hour: "", minute: "", period: "AM" },
      url: "",
    },
    validationSchema: formSchema,
    onSubmit: addTimer,
  });

  const dropdownCategories = [
    { value: "", displayValue: "Select a category" },
    ...categories
      .filter(({ id }) => id > 0)
      .map(({ id, name }) => ({ value: id, displayValue: name })),
  ];

  const dropdownMonths = [
    { value: "", displayValue: "MM" },
    ...months.map(({ value, displayValue }) => ({
      value: addLeadingZero(value),
      displayValue,
    })),
  ];

  const dropdownYears = [
    { value: "", displayValue: "YYYY" },
    ...inclusiveRange(2018, 2023, 1).map((value) => ({
      value: value.toString(),
      displayValue: value.toString(),
    })),
  ];

  const dropdownHours = [
    { value: "", displayValue: "hh" },
    ...inclusiveRange(1, 12, 1).map((value) => ({
      value: addLeadingZero(value),
      displayValue: addLeadingZero(value),
    })),
  ];

  const dropdownMinutes = [
    { value: "", displayValue: "mm" },
    ...inclusiveRange(0, 59, 1).map((value) => ({
      value: addLeadingZero(value),
      displayValue: addLeadingZero(value),
    })),
  ];

  const dropdownPeriods = [
    { value: "AM", displayValue: "AM" },
    { value: "PM", displayValue: "PM" },
  ];

  const getDays = (month) => {
    const selected = months.find(
      (entry) => entry.value === parseInt(month, 10)
    );
    return selected
      ? [
          { value: "", displayValue: "DD" },
          ...inclusiveRange(1, selected.days, 1).map((value) => ({
            value,
            displayValue: value,
          })),
        ]
      : [];
  };

  return (
    <Container
      key="form-container"
      animate="visible"
      initial="hidden"
      exit="hidden"
      {...{ variants }}
    >
      <FormContainer
        onSubmit={handleSubmit}
        animate="slideIn"
        initial="slideOut"
        exit="slideOut"
        {...{ variants }}
      >
        <Header>
          <span>⏲️ New Timer</span>
          <CloseButton onClick={() => showForm(false)}>
            <img src={CloseIcon} alt="Close form" />
          </CloseButton>
        </Header>
        <AnimatePresence>
          {page === 1 && (
            <Page
              key="page-1"
              animate="visible"
              initial="hidden"
              exit="hidden"
              {...{ variants }}
            >
              <InputRow>
                <Input
                  name="title"
                  label="Title"
                  value={values.title}
                  onChange={handleChange}
                  validate={touched.title && errors.title}
                />
              </InputRow>
              <InputRow>
                <Input
                  name="description"
                  label="Description"
                  value={values.description}
                  onChange={handleChange}
                  validate={touched.description && errors.description}
                />
              </InputRow>
              <InputRow>
                <Select
                  name="category_id"
                  label="Category"
                  value={values.category_id}
                  onChange={(e) =>
                    setFieldValue("category_id", parseInt(e.target.value, 10))
                  }
                  options={dropdownCategories}
                  validate={touched.category_id && errors.category_id}
                />
              </InputRow>
              <SelectRow>
                <Select
                  name="date.month"
                  label="Month"
                  value={values.date.month}
                  onChange={(e) => setFieldValue("date.month", e.target.value)}
                  options={dropdownMonths}
                  validate={
                    touched?.date &&
                    touched.date.month &&
                    errors?.date &&
                    errors.date.month
                  }
                />
                <Select
                  name="date.day"
                  label="Day"
                  value={values.date.day}
                  onChange={(e) => setFieldValue("date.day", e.target.value)}
                  options={getDays(values.date.month)}
                  validate={
                    touched?.date &&
                    touched.date.day &&
                    errors?.date &&
                    errors.date.day
                  }
                />
                <Select
                  name="date.year"
                  label="Year"
                  value={values.date.year}
                  onChange={(e) => setFieldValue("date.year", e.target.value)}
                  options={dropdownYears}
                  validate={
                    touched?.date &&
                    touched.date.year &&
                    errors?.date &&
                    errors.date.year
                  }
                />
              </SelectRow>
              <Message>Note: Eastern Time (US Market Std.)</Message>
              <SelectRow>
                <Select
                  name="time.hour"
                  label="Hour"
                  value={values.time.hour}
                  onChange={(e) => setFieldValue("time.hour", e.target.value)}
                  options={dropdownHours}
                  validate={
                    touched?.time &&
                    touched.time.hour &&
                    errors?.time &&
                    errors.time.hour
                  }
                />
                <Select
                  name="time.minute"
                  label="Minute"
                  value={values.time.minute}
                  onChange={(e) => setFieldValue("time.minute", e.target.value)}
                  options={dropdownMinutes}
                  validate={
                    touched?.time &&
                    touched.time.minute &&
                    errors?.time &&
                    errors.time.minute
                  }
                />
                <Select
                  name="time.period"
                  label="Period"
                  value={values.time.period}
                  onChange={(e) => setFieldValue("time.period", e.target.value)}
                  options={dropdownPeriods}
                  validate={
                    touched?.time &&
                    touched.time.period &&
                    errors?.time &&
                    errors.time.period
                  }
                />
              </SelectRow>
              <InputRow>
                <Input
                  name="url"
                  label="Link/URL"
                  value={values.url}
                  onChange={handleChange}
                  validate={touched.url && errors.url}
                />
              </InputRow>
              <FormButtonRow>
                <FormButton
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  Submit
                </FormButton>
              </FormButtonRow>
            </Page>
          )}
          {page === 2 && (
            <Success
              key="page-2"
              animate="visible"
              initial="hidden"
              exit="hidden"
              {...{ variants }}
            >
              <div className="icon">🚀🌕</div>
              <div className="message">
                Your timer has been submitted for approval!
              </div>
            </Success>
          )}
        </AnimatePresence>
      </FormContainer>
    </Container>
  );
};

export default Form;
