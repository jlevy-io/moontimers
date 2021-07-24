import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-top: 89px;
  // overflow-x: hidden;
`;

export default Container;
