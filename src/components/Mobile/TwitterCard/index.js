import React from "react";
import ReactPlayer from "react-player/lazy";
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
  VideoWrapper,
  ImageWrapper,
  MarketMessage,
} from "./styles";

const TwitterCard = ({
  category_id,
  date,
  text,
  author,
  url,
  media,
  ticker,
  moonIcons,
  categories,
  timerTypes,
  index,
}) => {
  const category = categories.find((entry) => entry.id === category_id);

  const getVideoURL = (videoArray) => {
    const list = videoArray.filter(
      ({ content_type }) => content_type === "video/mp4"
    );
    if (list.length === 1) return list[0].url;
    const sorted = [...list].sort((a, b) => b.bitrate - a.bitrate);
    console.log(sorted);
    return sorted[0].url;
  };

  const getPhotoAspect = (photoObject) => {
    const { sizes } = photoObject;
    return sizes.large.w / sizes.large.h;
  };

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
        <Title>{`${author.name} on Twitter`}</Title>
      </Header>
      <Content>
        <Left>
          {text && <Description>{text}</Description>}

          {media && media.type && media.type === "video" && (
            <VideoWrapper
              aspect={
                media.video_info.aspect_ratio[0] /
                media.video_info.aspect_ratio[1]
              }
            >
              <ReactPlayer
                className="react-player"
                muted
                controls
                url={getVideoURL(media.video_info.variants)}
                width="100%"
                height="100%"
              />
            </VideoWrapper>
          )}
          {media && media.type && media.type === "animated_gif" && (
            <VideoWrapper
              aspect={
                media.video_info.aspect_ratio[0] /
                media.video_info.aspect_ratio[1]
              }
            >
              <ReactPlayer
                className="react-player"
                muted
                playing
                loop
                playsinline
                url={getVideoURL(media.video_info.variants)}
                width="100%"
                height="100%"
              />
            </VideoWrapper>
          )}
          {Array.isArray(media) && media[0].type && media[0].type === "photo" && (
            <ImageWrapper aspect={getPhotoAspect(media[0])}>
              <img src={media[0].media_url_https} alt={text} />
            </ImageWrapper>
          )}
          <InfoBar>
            <Link href={url} target="_blank" rel="noreferrer">
              Link
            </Link>
            <CategoryLabel>
              <span>{`${category.icon} ${category.name}`}</span>
            </CategoryLabel>
            {author && (
              <Link
                href={`https://twitter.com/${author.username}`}
                target="_blank"
                rel="noreferrer"
              >
                <span>{`@${author.username}`}</span>
              </Link>
            )}
          </InfoBar>
        </Left>
        <Right>
          <BottomRow>
            <Timer {...{ date, timerTypes }} />
            {ticker ? (
              <TickerRow {...{ ticker }} isMobile />
            ) : (
              <MarketMessage>
                Market data unavailable for this date
              </MarketMessage>
            )}
          </BottomRow>
        </Right>
      </Content>
    </Container>
  );
};

export default TwitterCard;
