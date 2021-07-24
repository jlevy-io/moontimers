import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.header`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-size: 15px;
  pointer-events: auto;
  -webkit-user-select: auto !important;
  -webkit-box-direction: normal;
  -webkit-box-orient: vertical;
  border: 0 solid black;
  box-sizing: border-box;
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  min-height: 0px;
  min-width: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  position: relative;
  z-index: 3;
  -webkit-box-align: end;
  align-items: flex-end;
  -webkit-box-flex: 1;
  flex-grow: 1;
`;

export const TopAnchor = styled.div`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-size: 15px;
  pointer-events: auto;
  -webkit-user-select: auto !important;
  -webkit-box-align: stretch;
  -webkit-box-direction: normal;
  -webkit-box-orient: vertical;
  align-items: stretch;
  border: 0 solid black;
  box-sizing: border-box;
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  min-height: 0px;
  min-width: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  position: relative;
  z-index: 0;
  width: 275px;
`;

export const Menu = styled.div`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-size: 15px;
  pointer-events: auto;
  -webkit-user-select: auto !important;
  -webkit-box-align: stretch;
  -webkit-box-direction: normal;
  -webkit-box-orient: vertical;
  align-items: stretch;
  border: 0 solid black;
  box-sizing: border-box;
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  min-height: 0px;
  min-width: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  z-index: 0;
  position: fixed;
  top: 0px;
  backface-visibility: hidden;
  height: 100%;
`;

export const MenuInner = styled.div`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-size: 15px;
  pointer-events: auto;
  -webkit-user-select: auto !important;
  -webkit-box-align: stretch;
  -webkit-box-direction: normal;
  -webkit-box-orient: vertical;
  align-items: stretch;
  border: 0 solid black;
  box-sizing: border-box;
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  min-height: 0px;
  min-width: 0px;
  padding-bottom: 0px;
  padding-top: 0px;
  position: relative;
  z-index: 0;
  padding-left: 12px;
  padding-right: 12px;
  width: 275px;
  height: 100%;
  -webkit-box-pack: justify;
  justify-content: space-between;
  overflow-y: auto;
`;

export const MenuElements = styled.div`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-size: 15px;
  pointer-events: auto;
  -webkit-user-select: auto !important;
  -webkit-box-direction: normal;
  -webkit-box-orient: vertical;
  border: 0 solid black;
  box-sizing: border-box;
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  min-height: 0px;
  min-width: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  position: relative;
  z-index: 0;
  -webkit-box-align: start;
  align-items: flex-start;
`;

export const Logo = styled.div`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-size: 15px;
  pointer-events: auto;
  -webkit-user-select: auto !important;
  -webkit-box-align: stretch;
  -webkit-box-direction: normal;
  -webkit-box-orient: vertical;
  align-items: stretch;
  border: 0 solid black;
  box-sizing: border-box;
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  min-height: 0px;
  min-width: 0px;
  padding-left: 0px;
  padding-right: 0px;
  position: relative;
  z-index: 0;
  padding-bottom: 2px;
  padding-top: 2px;
  max-width: 100%;
  cursor: default;
  h1 {
    margin-bottom: 0;
    font-family: "Chirp Heavy";
  }
`;

export const MenuButtons = styled.div`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-size: 15px;
  pointer-events: auto;
  -webkit-user-select: auto !important;
  -webkit-box-align: stretch;
  -webkit-box-direction: normal;
  -webkit-box-orient: vertical;
  align-items: stretch;
  border: 0 solid black;
  box-sizing: border-box;
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  margin-left: 0px;
  margin-right: 0px;
  min-height: 0px;
  min-width: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  position: relative;
  z-index: 0;
  width: 100%;
  margin-bottom: 4px;
  margin-top: 2px;
`;

export const NavContainer = styled.nav`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-size: 15px;
  pointer-events: auto;
  -webkit-user-select: auto !important;
  border: 0 solid black;
  box-sizing: border-box;
  display: flex;
  flex-basis: auto;
  flex-shrink: 0;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  min-height: 0px;
  min-width: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  position: relative;
  z-index: 0;
  -webkit-box-align: start;
  align-items: flex-start;
  -webkit-box-direction: normal;
  -webkit-box-orient: vertical;
  flex-direction: column;
`;

export const NavButton = styled(Link)`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  pointer-events: auto;
  -webkit-user-select: auto !important;
  background-color: rgba(0, 0, 0, 0);
  color: inherit;
  font: inherit;
  list-style: none;
  text-align: inherit;
  text-decoration: none;
  border: 0 solid black;
  box-sizing: border-box;
  flex-basis: auto;
  flex-shrink: 0;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  min-height: 0px;
  min-width: 0px;
  padding-left: 0px;
  padding-right: 0px;
  position: relative;
  z-index: 0;
  display: flex;
  padding-bottom: 4px;
  padding-top: 4px;
  width: 100%;
  -webkit-box-flex: 1;
  flex-grow: 1;
  -webkit-box-align: start;
  align-items: flex-start;
  cursor: pointer;
  outline-style: none;
  -webkit-box-direction: normal;
  -webkit-box-orient: vertical;
  flex-direction: column;
`;

export const NavButtonInner = styled.div`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  pointer-events: auto;
  color: inherit;
  font: inherit;
  list-style: none;
  text-align: inherit;
  cursor: pointer;
  -webkit-user-select: auto !important;
  border: 0 solid black;
  box-sizing: border-box;
  display: flex;
  flex-basis: auto;
  flex-shrink: 0;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  min-height: 0px;
  min-width: 0px;
  position: relative;
  z-index: 0;
  border-radius: 9999px;
  padding: 6px 12px;
  max-width: 100%;
  -webkit-box-direction: normal;
  -webkit-box-orient: horizontal;
  flex-direction: row;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  transition-duration: 0.2s;
  transition-property: background-color, box-shadow;

  ${NavButton}:hover & {
    background-color: rgba(29, 161, 242, 0.1);
  }

  ${NavButton}:focus & {
    outline: none;
    box-shadow: rgb(142, 208, 249) 0px 0px 0px 2px;
    background-color: rgb(0, 0, 0, 0.1);
  }

  .icon {
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    pointer-events: auto;
    color: inherit;
    font: inherit;
    list-style: none;
    text-align: inherit;
    cursor: pointer;
    -webkit-user-select: auto !important;
    -webkit-box-align: stretch;
    -webkit-box-direction: normal;
    -webkit-box-orient: vertical;
    align-items: center;
    border: 0 solid black;
    box-sizing: border-box;
    display: flex;
    flex-basis: auto;
    flex-direction: column;
    flex-shrink: 0;
    margin-bottom: 0px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    min-height: 0px;
    min-width: 50px;
    padding-bottom: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
    position: relative;
    z-index: 0;
    font-size: 3vh;
  }
  .text {
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    pointer-events: auto;
    list-style: none;
    text-align: inherit;
    cursor: pointer;
    -webkit-box-direction: normal;
    unicode-bidi: isolate;
    -webkit-user-select: auto !important;
    border: 0 solid black;
    box-sizing: border-box;
    display: inline;
    font: 14px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
      Arial, sans-serif;
    margin-bottom: 0px;
    margin-top: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0px;
    overflow-wrap: break-word;
    font-family: Chirp, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif;
    color: rgb(255, 255, 255);
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    margin-left: 20px;
    margin-right: 16px;
    transition-duration: 0.2s;
    transition-property: color;
    ${NavButton}:hover & {
      color: ${({ theme }) => theme.colors.focusBlue};
    }
    ${NavButton}:focus & {
      color: ${({ theme }) => theme.colors.focusBlue};
    }
    & > span {
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      pointer-events: auto;
      list-style: none;
      text-align: inherit;
      cursor: pointer;
      -webkit-box-direction: normal;
      -webkit-user-select: auto !important;
      border: 0 solid black;
      box-sizing: border-box;
      display: inline;
      margin-bottom: 0px;
      margin-left: 0px;
      margin-right: 0px;
      margin-top: 0px;
      padding-bottom: 0px;
      padding-left: 0px;
      padding-right: 0px;
      padding-top: 0px;
      color: inherit;
      font: inherit;
      white-space: inherit;
      min-width: 0px;
      overflow-wrap: break-word;
      font-family: inherit;
      &.active {
        color: ${({ theme }) => theme.colors.focusBlue};
      }
    }
  }
`;

export const FormButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px 0px;
  width: 90%;
  height: 46px;
  background: ${({ theme }) => theme.colors.focusBlue};
  border-radius: 9999px;
  font-weight: 700;
  min-width: 44px;
  cursor: pointer;
  transition-duration: 0.2s;
  transition-property: background;
  &:disabled {
    background: ${({ theme }) => theme.colors.primaryDarkBorder};
  }
  &:hover {
    background: ${({ theme }) => theme.colors.focusBlueHighlight};
  }
`;

export default Container;
