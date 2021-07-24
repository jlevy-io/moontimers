import styled from "styled-components";

export const Window = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
  width: 100vw;
`;

const StyledViewContainer = styled.main`
  position: absolute;
  width: 100%;
  height: calc(100vh - 15vh);
  top: 7.5vh;
  left: 0;
  bottom: 46px;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 15vh);
  flex: 1;
`;

export default StyledViewContainer;
