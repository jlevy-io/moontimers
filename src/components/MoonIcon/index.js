import React from "react";
import m from "moment";
import Container, { Label, Badge } from "./styles";

const MoonIcon = ({ date, moonIcons, isMobile }) => {
  const { icon, label, color } = React.useMemo(() => {
    const difference = m(date).diff(m(), "days");
    return moonIcons.find(
      ({ days }) => difference >= days[0] && difference <= days[1]
    );
  }, [date, moonIcons]);

  return (
    <Container className={isMobile ? "mobile" : ""} {...{ isMobile }}>
      <span className="moon-icon">{icon}</span>
      {!isMobile ? (
        <Label>
          <Badge badgeColor={color}>{label}</Badge>
        </Label>
      ) : null}
    </Container>
  );
};

export default MoonIcon;
