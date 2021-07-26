import React from "react";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "components/Loader";
import Controls from "components/Controls";
import TimerBar from "components/TimerBar";
import TimerCard from "components/Mobile/TimerCard";
import NoData from "components/NoData";
import Container from "./styles";

const Main = ({
  data,
  loading,
  timerTypes,
  moonIcons,
  categories,
  skip,
  loadMore,
  hasMore,
  resetData,
  sort,
  setSort,
}) => {
  // Router
  const { tab } = useParams();
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });

  return (
    <Container>
      {tab && (
        <>
          <Controls {...{ timerTypes, resetData, sort, setSort }} />
          {loading && skip === 0 ? (
            <Loader />
          ) : (
            <>
              {data && data[0] ? (
                <InfiniteScroll
                  dataLength={data.length}
                  next={loadMore}
                  hasMore={hasMore}
                  loader={<Loader small />}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100vh",
                  }}
                >
                  {data.map(
                    (
                      {
                        category_id,
                        title,
                        description,
                        date,
                        url,
                        author,
                        subreddit,
                        ticker,
                      },
                      index
                    ) =>
                      isDesktopOrLaptop ? (
                        <TimerBar
                          key={`timer-${index + 1}`}
                          {...{
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
                          }}
                        />
                      ) : (
                        <TimerCard
                          key={`timer-${index + 1}`}
                          {...{
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
                          }}
                        />
                      )
                  )}
                </InfiniteScroll>
              ) : (
                !loading && <NoData />
              )}
            </>
          )}
        </>
      )}
    </Container>
  );
};

export default Main;
