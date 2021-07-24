import React, { lazy, Suspense } from "react";
import { useHistory } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { useMediaQuery } from "react-responsive";
import Loader from "components/Loader";
import Error from "components/Error";

const Router = lazy(() => import("./Router"));
const MobileApp = lazy(() => import("containers/MobileApp"));

const App = () => {
  const history = useHistory();
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1024 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1023 });

  const errorFallback = ({ error, resetErrorBoundary }) => (
    <Error
      isMobile={isTabletOrMobileDevice}
      {...{ error, resetErrorBoundary }}
    />
  );

  return (
    <ErrorBoundary
      FallbackComponent={errorFallback}
      onReset={() => history.push("/")}
    >
      {isDesktopOrLaptop && (
        <Suspense fallback={<Loader full />}>
          <Router />
        </Suspense>
      )}
      {isTabletOrMobileDevice && (
        <Suspense fallback={<Loader full />}>
          <MobileApp />
        </Suspense>
      )}
    </ErrorBoundary>
  );
};

export default App;
