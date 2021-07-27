import React from "react";
import Button from "components/Button";
import variants from "./variants";
import Container, { Icons } from "./styles";

const Error = ({ isMobile, error, resetErrorBoundary }) => {
  return (
    <Container initial="hidden" animate="visible" {...{ variants, isMobile }}>
      <Icons>🔥👨‍💻🔥</Icons>
      <div>
        <span>Something went wrong.</span>
      </div>
      {error && error.message ? <pre>{error.message}</pre> : null}
      {resetErrorBoundary ? (
        <Button onClick={() => resetErrorBoundary()}>Try Again</Button>
      ) : null}
    </Container>
  );
};

export default Error;
