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
      <pre>{error.message}</pre>
      <Button onClick={() => resetErrorBoundary()}>Try Again</Button>
    </Container>
  );
};

export default Error;
