import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Menu from "components/Mobile/Menu";
import MenuIcon from "assets/images/icons/menu.svg";
import SortUpIcon from "assets/images/icons/sort-up.svg";
import SortDownIcon from "assets/images/icons/sort-down.svg";
import Container, { Logo, MenuButton, MenuButtons } from "./styles";

const MenuBar = ({
  categories,
  timerTypes,
  segments,
  showForm,
  resetData,
  sort,
  setSort,
}) => {
  const [menu, showMenu] = useState(false);

  const handleSort = () => {
    resetData();
    return sort === 1 ? setSort(-1) : setSort(1);
  };

  return (
    <Container>
      <Logo to="/home/all">
        <h1>
          <span>🌕</span>
          <span>Moon</span>
          <span>Timers</span>
        </h1>
      </Logo>
      <MenuButtons>
        <MenuButton onClick={() => handleSort()}>
          {sort === 1 ? (
            <img src={SortUpIcon} alt="Sort ascending" />
          ) : (
            <img src={SortDownIcon} alt="Sort descending" />
          )}
        </MenuButton>
        <MenuButton onClick={() => showMenu(!menu)}>
          <img src={MenuIcon} alt="Menu button" />
        </MenuButton>
      </MenuButtons>
      <AnimatePresence>
        {menu ? (
          <Menu
            {...{
              categories,
              timerTypes,
              segments,
              showForm,
              showMenu,
              resetData,
            }}
          />
        ) : null}
      </AnimatePresence>
    </Container>
  );
};

export default MenuBar;
