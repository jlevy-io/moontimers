import React from "react";
import CloseIcon from "assets/images/icons/close.svg";
import Container, {
  Header,
  MenuItem,
  MenuItemInner,
  CloseButton,
  NavContainer,
  FormButtonRow,
  FormButton,
} from "./styles";

const Menu = ({
  categories,
  timerTypes,
  segments,
  showForm,
  showMenu,
  resetData,
}) => {
  const typeRoutes = timerTypes.map(({ short_name }) => short_name);

  const openForm = () => {
    showForm(true);
    return showMenu(false);
  };

  const handleClick = (short_name) => {
    if (segments[1] === short_name) {
      return null;
    }
    resetData();
    return showMenu(false);
  };

  return (
    <Container
      initial={{ x: "90vw", y: 0 }}
      animate={{ x: 0, y: 0 }}
      transition={{ duration: 0.25 }}
      exit={{ x: "90vw", y: 0 }}
    >
      <Header>
        <span>Categories</span>
        <CloseButton onClick={() => showMenu(false)}>
          <img src={CloseIcon} alt="Close menu" />
        </CloseButton>
      </Header>
      <NavContainer>
        {categories.map(({ id, name, short_name, icon }) => (
          <MenuItem
            key={id}
            to={`/${short_name}/${
              typeRoutes.includes(segments[2]) ? segments[2] : "all"
            }`}
            aria-label={name}
            role="link"
            onClick={() => handleClick(short_name)}
          >
            <MenuItemInner>
              <div className="icon">{icon}</div>
              <div className="text">
                <span
                  className={
                    segments && segments[1] === short_name ? "active" : ""
                  }
                >
                  {name}
                </span>
              </div>
            </MenuItemInner>
          </MenuItem>
        ))}
      </NavContainer>
      <FormButtonRow>
        <FormButton onClick={() => openForm()}>Add Timer</FormButton>
      </FormButtonRow>
    </Container>
  );
};

export default Menu;
