import React from "react";
import MoonIcon from "components/MoonIcon";
import Timer from "components/Mobile/TimerMobile";
import TickerRow from "components/TickerRow";
import variants from "./variants";
import Container, {
  Header,
  CategoryLabel,
  Title,
  InfoBar,
  Description,
  Link,
  BottomRow,
  Content,
  Left,
  Right,
} from "./styles";

const TimerCard = ({
  category_id,
  title,
  description,
  date,
  url,
  author,
  subreddit,
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
      <Header>
        <MoonIcon {...{ date, moonIcons }} isMobile />
        <Title>{title}</Title>
      </Header>
      <Content>
        <Left>
          <Description>{description}</Description>
          <InfoBar>
            <Link href={url} target="_blank" rel="noreferrer">
              Link
            </Link>
            {subreddit && (
              <Link
                href={`https://reddit.com/r/${subreddit}/`}
                target="_blank"
                rel="noreferrer"
              >
                <span>{`/r/${subreddit}`}</span>
              </Link>
            )}
            {author && (
              <Link
                href={`https://reddit.com/user/${author}/`}
                target="_blank"
                rel="noreferrer"
              >
                <span>{`/u/${author}`}</span>
              </Link>
            )}
            <CategoryLabel>
              <span>{`${category.icon} ${category.name}`}</span>
            </CategoryLabel>
          </InfoBar>
        </Left>
        <Right>
          <BottomRow>
            <Timer {...{ date, timerTypes }} />
            {ticker && <TickerRow {...{ ticker }} isMobile />}
          </BottomRow>
        </Right>
      </Content>
    </Container>
  );
};

export default TimerCard;
