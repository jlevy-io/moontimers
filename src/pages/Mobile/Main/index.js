import React from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "components/Loader";
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
}) => {
  // Router

  // Router
  const { tab } = useParams();

  return (
    <Container>
      {tab && (
        <>
          {loading && skip === 0 ? (
            <Loader full />
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
                        ticker,
                      },
                      index
                    ) => (
                      <TimerCard
                        key={`timer-${index + 1}`}
                        {...{
                          category_id,
                          title,
                          description,
                          date,
                          url,
                          author,
                          ticker,
                          moonIcons,
                          timerTypes,
                          categories,
                          index,
                        }}
                      />
                    )
                  )}
                </InfiniteScroll>
              ) : (
                <NoData isMobile />
              )}
            </>
          )}
        </>
      )}
    </Container>
  );
};

export default Main;
