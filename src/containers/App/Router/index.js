import React, { useState, lazy, Suspense, useEffect } from "react";
import {
  Switch,
  Route,
  Redirect,
  useLocation,
  useHistory,
} from "react-router-dom";
import useSWR from "swr";
import MenuBar from "components/MenuBar";
import Loader from "components/Loader";
import API from "services/api";
import { componentLoader } from "services/utils";
import ViewContainer from "../ViewContainer";
import { Window, Content } from "../styles";

const Main = lazy(() => componentLoader(() => import("pages/Main"), 3));
const Error = lazy(() => componentLoader(() => import("components/Error"), 3));
const Form = lazy(() => componentLoader(() => import("components/Form"), 3));

const limit = 15;

const App = () => {
  const history = useHistory();
  const location = useLocation();
  const segments = React.useMemo(
    () => location?.pathname.split("/"),
    [location, history]
  );

  const [skip, setSkip] = useState(0);
  const [form, showForm] = useState(false);
  const [data, setData] = useState([]);
  const [sort, setSort] = useState(-1);

  // app data fetching
  const {
    data: { data: { categories = [] } = {} } = {},
    isValidating: categoriesLoading,
  } = useSWR("getCategories", API.getCategories, {
    dedupingInterval: 30000,
    focusThrottleInterval: 30000,
  });

  const {
    data: { data: { data: timerTypes = [] } = {} } = {},
    isValidating: typesLoading,
  } = useSWR("getTimerTypes", API.getTimerTypes, {
    dedupingInterval: 30000,
    focusThrottleInterval: 30000,
  });

  const {
    data: { data: { data: moonIcons = [] } = {} } = {},
    isValidating: iconsLoading,
  } = useSWR("getMoonIcons", API.getMoonIcons, {
    dedupingInterval: 30000,
    focusThrottleInterval: 30000,
  });

  const isLoaded = () =>
    categories[0] &&
    timerTypes[0] &&
    moonIcons[0] &&
    !categoriesLoading &&
    !typesLoading &&
    !iconsLoading;

  const categoryList = React.useMemo(() =>
    categories.map(({ short_name }) => short_name)
  );
  const tabList = React.useMemo(() =>
    timerTypes.map(({ short_name }) => short_name)
  );

  const isValidPath = () =>
    segments.length === 3 &&
    categoryList.includes(segments[1]) &&
    tabList.includes(segments[2]);

  const dataKey = isValidPath(segments)
    ? [
        `getTimerData`,
        JSON.stringify({
          category: segments[1],
          filter: segments[2],
          limit,
          skip,
          sort,
        }),
      ]
    : null;

  const { data: { data: timerDataObj = {} } = {}, isValidating: loading } =
    useSWR(dataKey, API.getTimerData);

  const { data: timerData = [], total = 0 } = timerDataObj || {};

  const hasMore = loading || total === 0 || skip + limit < total;
  const loadMore = () => (hasMore ? setSkip(skip + limit) : null);

  const resetData = () => {
    setData([]);
    return setTimeout(() => setSkip(0), 200);
  };

  useEffect(() => {
    if (isLoaded() && !isValidPath() && categoryList.includes(segments[1])) {
      return history.push(`/${segments[1]}/all`);
    }

    return () => null;
  }, [categoryList, segments]);

  useEffect(() => {
    if (timerData[0]) {
      setData(skip === 0 ? [...timerData] : [...data, ...timerData]);
    }

    return () => null;
  }, [timerData]);

  return (
    <Window>
      {isLoaded() && (
        <MenuBar
          {...{ categories, timerTypes, segments, showForm, resetData }}
        />
      )}
      {isLoaded() ? (
        <ViewContainer>
          <Content>
            <Suspense fallback={<Loader full />}>
              <Switch>
                {isValidPath() && (
                  <Route path="/:category/:tab">
                    <Main
                      {...{
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
                      }}
                    />
                  </Route>
                )}
                <Route exact path="/">
                  <Redirect to="/home/all" />
                </Route>
                <Route path="*">
                  <Error />
                </Route>
              </Switch>
            </Suspense>
          </Content>
        </ViewContainer>
      ) : (
        <Loader full />
      )}
      {form && (
        <Suspense fallback={<Loader full />}>
          <Form {...{ showForm, categories }} />
        </Suspense>
      )}
    </Window>
  );
};

export default App;
