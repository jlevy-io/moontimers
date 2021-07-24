import React from "react";
import { TimeProvider } from "react-time-sync";
import TimeSync from "time-sync";

const Time = ({ children }) => {
  const timeSync = new TimeSync();
  return <TimeProvider timeSync={timeSync}>{children}</TimeProvider>;
};

export default Time;
