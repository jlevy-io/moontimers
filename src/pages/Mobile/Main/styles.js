import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  // max-height: calc(100vh - 7.5vh - 46px);
  color: ${({ theme }) => theme.colors.primaryText};
  margin-top: 3px;
  overflow-y: visible;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 7.5vh;
`;

export default Container;
