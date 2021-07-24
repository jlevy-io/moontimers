import React from "react";
import MoonIcon from "components/MoonIcon";
import Timer from "components/Timer";
import TickerRow from "components/TickerRow";
import variants from "./variants";
import Container, {
  CategoryLabel,
  ContentWrapper,
  Title,
  ContentInner,
  ContentLeft,
  ContentRight,
  InfoBar,
  Description,
  Link,
} from "./styles";

const TimerBar = ({
  category_id,
  title,
  description,
  date,
  url,
  author,
  ticker,
  moonIcons,
  categories,
  timerTypes,
  index,
}) => {
  const category = categories.find((entry) => entry.id === category_id);

  return (
    <Container
      key={`timercontent-${index + 1}`}
      custom={index}
      initial="hidden"
      animate="visible"
      {...{ variants }}
    >
      <ContentWrapper>
        <ContentInner>
          <MoonIcon {...{ date, moonIcons }} />
          <ContentLeft>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <InfoBar>
              <Link href={url} target="_blank" rel="noreferrer">
                Link
              </Link>
              <CategoryLabel>
                <span>{`${category.icon} ${category.name}`}</span>
              </CategoryLabel>
              {author && (
                <Link
                  href={`https://reddit.com/user/${author}/`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{`/u/${author}`}</span>
                </Link>
              )}
            </InfoBar>
          </ContentLeft>
          <ContentRight>
            <Timer {...{ date, timerTypes }} />
            {ticker && <TickerRow {...{ ticker }} />}
          </ContentRight>
        </ContentInner>
      </ContentWrapper>
    </Container>
  );
};

export default TimerBar;
