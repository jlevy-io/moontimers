import React, { lazy, Suspense } from "react";
import Loader from "components/Loader";

const Router = lazy(() => import("./MobileRouter"));

const MobileApp = () => {
  return (
    <Suspense fallback={<Loader full />}>
      <Router />
    </Suspense>
  );
};

export default MobileApp;
