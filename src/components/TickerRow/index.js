import React from "react";
import Container, { Ticker } from "./styles";

const TickerRow = ({ ticker, isMobile }) => {
  const { open, close, high, low, volume } = ticker || {};

  const formatVolume = (value) =>
    new Intl.NumberFormat("en-US", {
      maximumFractionDigits: 1,
      notation: "compact",
      compactDisplay: "short",
    }).format(parseInt(value, 10));

  return (
    <Container>
      <Ticker className={isMobile ? "mobile" : ""}>
        <div className="header">Open</div>
        <div className="body">{open}</div>
      </Ticker>
      <Ticker className={isMobile ? "mobile" : ""}>
        <div className="header">High</div>
        <div className="body">{high}</div>
      </Ticker>
      <Ticker className={isMobile ? "mobile" : ""}>
        <div className="header">Low</div>
        <div className="body">{low}</div>
      </Ticker>
      <Ticker className={isMobile ? "mobile" : ""}>
        <div className="header">Close</div>
        <div className="body">{close}</div>
      </Ticker>
      <Ticker className={isMobile ? "mobile" : ""}>
        <div className="header">Vol</div>
        <div className="body">{formatVolume(volume)}</div>
      </Ticker>
    </Container>
  );
};

export default TickerRow;
