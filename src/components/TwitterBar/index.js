import React, { useState, lazy, Suspense } from "react";
import { useSmartcrop } from "use-smartcrop";
import ReactPlayer from "react-player/lazy";
import MoonIcon from "components/MoonIcon";
import Loader from "components/Loader";
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
  VideoWrapper,
  ImageWrapper,
} from "./styles";

const LightBox = lazy(() => import("components/Lightbox"));

const TwitterBar = ({
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
  const [modal, showModal] = useState(false);
  const [cropped, error] = useSmartcrop(
    { src: media && media[0] && media[0].media_url_https },
    {
      width: 450,
      height: 337.5,
      minScale: 1.5,
    }
  );

  const getVideoURL = (videoArray) => {
    const list = videoArray.filter(
      ({ content_type }) => content_type === "video/mp4"
    );
    if (list.length === 1) return list[0].url;
    const sorted = [...list].sort((a, b) => b.bitrate - a.bitrate);
    return sorted[0].url;
  };

  const getPhotoAspect = (photoObject) => {
    const { sizes } = photoObject;
    return sizes.large.w / sizes.large.h;
  };

  const onClose = () => showModal(false);

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
            <Title>{`${author.name} on Twitter`}</Title>
            <Description>{text}</Description>
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
                  url={getVideoURL(media.video_info.variants)}
                  width="100%"
                  height="100%"
                />
              </VideoWrapper>
            )}
            {Array.isArray(media) &&
              media[0].type &&
              media[0].type === "photo" && (
                <ImageWrapper
                  aspect={getPhotoAspect(media[0])}
                  onClick={() => showModal(true)}
                >
                  <img src={!error && cropped} alt={text} />
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
          </ContentLeft>
          <ContentRight hasMedia={media}>
            <Timer {...{ date, timerTypes }} />
            {ticker && <TickerRow {...{ ticker }} />}
          </ContentRight>
        </ContentInner>
      </ContentWrapper>
      {modal && (
        <Suspense fallback={<Loader full />}>
          <LightBox
            imageSrc={media && media[0] && media[0].media_url_https}
            altText={text}
            isOpen={modal}
            onClose={() => onClose()}
          />
        </Suspense>
      )}
    </Container>
  );
};

export default TwitterBar;
