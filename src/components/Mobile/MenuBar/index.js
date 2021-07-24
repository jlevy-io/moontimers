import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Menu from "components/Mobile/Menu";
import MenuIcon from "assets/images/icons/menu.svg";
import Container, { Logo, MenuButton } from "./styles";

const MenuBar = ({ categories, timerTypes, segments, showForm, resetData }) => {
  const [menu, showMenu] = useState(false);

  return (
    <Container>
      <Logo to="/home/all">
        <h1>
          <span>🌕</span>
          <span>Moon</span>
          <span>Timers</span>
        </h1>
      </Logo>

      <MenuButton onClick={() => showMenu(!menu)}>
        <img src={MenuIcon} alt="Menu button" />
      </MenuButton>
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
