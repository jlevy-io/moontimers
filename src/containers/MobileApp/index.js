import React, { lazy, Suspense } from "react";
import Loader from "components/Loader";
import { componentLoader } from "services/utils";

const Router = lazy(() => componentLoader(() => import("./MobileRouter"), 3));

const MobileApp = () => {
  return (
    <Suspense fallback={<Loader full />}>
      <Router />
    </Suspense>
  );
};

export default MobileApp;
