import React, { useEffect, useState } from "react";
import { useTime } from "react-time-sync";
import m from "moment";
import TimeSync from "time-sync";
import { getTimeDiff } from "services/utils";
import Container, {
  Header,
  Badge,
  TimerBox,
  TimerBoxSection,
  TimerBoxBody,
  TimerBoxHeader,
} from "./styles";

const Timer = ({ date, timerTypes }) => {
  const currentTime = useTime({ unit: 1, interval: TimeSync.SECONDS });

  const [timerTypeID, setTimerTypeID] = useState(m() < m(date) ? 1 : 2);
  const [days, setDays] = useState("0");
  const [hours, setHours] = useState("0");
  const [minutes, setMinutes] = useState("0");
  const [seconds, setSeconds] = useState("0");

  const getTimeObj = () => {
    if (timerTypeID === 1) {
      return getTimeDiff(new Date(), new Date(date));
    }
    if (timerTypeID === 2) {
      return getTimeDiff(new Date(date), new Date());
    }
    return null;
  };

  const getTimerType = (value) => {
    return value && timerTypes && timerTypes[0]
      ? timerTypes.filter(({ id }) => id === value)
      : null;
  };

  const addLeadingZero = (value) => {
    return value.length <= 1 ? `0${value}` : value;
  };

  const timerType = getTimerType(timerTypeID);

  useEffect(() => {
    // Check if Count-Down is done
    if (timerTypeID === 1 && date && m() >= m(date)) {
      setTimerTypeID(2);
    }
    const timeObj = getTimeObj();
    setDays(timeObj?.days.toString());
    setHours(timeObj?.hours.toString());
    setMinutes(timeObj?.minutes.toString());
    setSeconds(timeObj?.seconds.toString());

    return () => null;
  }, [currentTime]);

  return (
    <Container>
      <Header>
        {timerType && timerType[0]
          ? timerType.map(({ id, name, color, icon }) => (
              <Badge key={`badge-${id}`} badgeColor={color}>
                {`${icon} ${name}`}
              </Badge>
            ))
          : null}

        <span>{m(date).format("M-DD-YYYY")}</span>
        <span>{m(date).format("h:mm a")}</span>
      </Header>
      <TimerBox className="glow">
        <TimerBoxSection>
          <TimerBoxHeader>Days</TimerBoxHeader>
          <TimerBoxBody>{addLeadingZero(days)}</TimerBoxBody>
        </TimerBoxSection>
        <TimerBoxSection>
          <TimerBoxHeader>Hrs</TimerBoxHeader>
          <TimerBoxBody>{addLeadingZero(hours)}</TimerBoxBody>
        </TimerBoxSection>
        <TimerBoxSection>
          <TimerBoxHeader>Mins</TimerBoxHeader>
          <TimerBoxBody>{addLeadingZero(minutes)}</TimerBoxBody>
        </TimerBoxSection>
        <TimerBoxSection>
          <TimerBoxHeader>Secs</TimerBoxHeader>
          <TimerBoxBody>{addLeadingZero(seconds)}</TimerBoxBody>
        </TimerBoxSection>
      </TimerBox>
    </Container>
  );
};

export default Timer;
