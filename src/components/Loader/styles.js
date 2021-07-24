import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryDark};
  width: 100%;
  height: 100%;
  z-index: 1000;
  &.full {
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
    border: none;
  }
`;

export const Inner = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-top: ${({ small }) => (small ? "0px" : "100px")};
  &.inner-full {
    margin-top: 0px;
  }
  .moon {
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
    border: 2px solid #ffffff;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    background-color: #fff;
    transform: translateZ(0);

    &.small {
      height: 40px;
      width: 40px;
    }
    &::before {
      content: " ";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #222;
      width: 50%;
      height: 100%;
      animation: flip 2s 1s steps(2) infinite alternate;
    }
  }

  .disc {
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    animation: rotate 4s linear infinite;

    &::before,
    &::after {
      content: " ";
      display: block;
      transform-style: preserve-3d;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      transition: transform 4s;
      position: absolute;
      backface-visibility: hidden;
    }
    &::before {
      background-color: #222;
    }
    &::after {
      background-color: #fff;
      transform: rotateY(180deg);
    }
  }

  @keyframes rotate {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }

  @keyframes flip {
    0% {
      left: 0;
    }
    100% {
      left: 100%;
    }
  }
`;

export default Container;
