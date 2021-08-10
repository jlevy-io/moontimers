import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.3);
  z-index: 999999;
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  display: flex;
  max-height: 80vh;
  max-width: 80vw;
  justify-content: center;
  & > img {
    object-fit: contain;
  }
`;
export default Container;
