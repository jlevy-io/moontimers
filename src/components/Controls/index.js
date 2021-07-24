import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Button from "components/Button";
import Container, { ButtonRow } from "./styles";

const Controls = ({ timerTypes, resetData, sort, setSort }) => {
  const history = useHistory();
  const { category, tab } = useParams();

  const handleTab = (newTab) => {
    if (tab === newTab) {
      return null;
    }
    resetData();
    return history.push(`/${category}/${newTab}`, { active: newTab });
  };

  const handleSort = () => {
    resetData();
    return sort === 1 ? setSort(-1) : setSort(1);
  };

  return (
    <Container>
      <ButtonRow>
        {timerTypes &&
          timerTypes[0] &&
          timerTypes.map(({ id, name, short_name, icon }) => (
            <Button
              key={`button-${id}`}
              className={tab === short_name ? "active" : ""}
              onClick={() => handleTab(short_name)}
            >
              {`${icon} ${id === 0 ? name : `${name}s`}`}
            </Button>
          ))}
      </ButtonRow>
      <Button onClick={() => handleSort()}>
        {sort === 1 ? `Sort 🔼` : `Sort 🔽`}
      </Button>
    </Container>
  );
};
export default Controls;
