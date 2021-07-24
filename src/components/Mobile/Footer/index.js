import React from "react";
import { useHistory } from "react-router-dom";
import Container, { FooterItem } from "./styles";

const Footer = ({ timerTypes, segments, resetData }) => {
  const history = useHistory();

  const handleTab = (newTab) => {
    if (segments[2] === newTab) {
      return null;
    }
    resetData();
    return segments[2] === newTab
      ? null
      : history.push(`/${segments[1]}/${newTab}`, { active: newTab });
  };

  return (
    <Container>
      {timerTypes &&
        timerTypes[0] &&
        timerTypes.map(({ id, short_name, name, icon }) => (
          <FooterItem
            key={`button-${id}`}
            className={segments[2] === short_name ? "active" : ""}
            onClick={() => handleTab(short_name)}
          >
            <span className="icon">{icon}</span>
            <span className="text">{id === 0 ? name : `${name}s`}</span>
          </FooterItem>
        ))}
    </Container>
  );
};

export default Footer;
