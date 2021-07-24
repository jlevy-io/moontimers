import React from "react";
import Container, {
  TopAnchor,
  Menu,
  MenuInner,
  MenuElements,
  Logo,
  MenuButtons,
  NavContainer,
  NavButton,
  NavButtonInner,
  FormButton,
} from "./styles";

const MenuBar = ({ categories, timerTypes, showForm, resetData, segments }) => {
  const typeRoutes = timerTypes.map(({ short_name }) => short_name);

  return (
    <Container role="banner">
      <TopAnchor>
        <Menu>
          <MenuInner>
            <MenuElements>
              <Logo>
                <h1>
                  🌕
                  <span>Moon</span>
                  <span>Timers</span>
                </h1>
              </Logo>
              <MenuButtons>
                <NavContainer>
                  {categories.map(({ id, name, short_name, icon }) => (
                    <NavButton
                      key={id}
                      to={`/${short_name}/${
                        typeRoutes.includes(segments[2]) ? segments[2] : "all"
                      }`}
                      onClick={() =>
                        segments[1] === short_name ? null : resetData()
                      }
                      aria-label={name}
                      role="link"
                    >
                      <NavButtonInner>
                        <div className="icon">{icon}</div>
                        <div className="text">
                          <span
                            className={
                              segments && segments[1] === short_name
                                ? "active"
                                : ""
                            }
                          >
                            {name}
                          </span>
                        </div>
                      </NavButtonInner>
                    </NavButton>
                  ))}
                  <FormButton onClick={() => showForm(true)}>
                    Add Timer
                  </FormButton>
                </NavContainer>
              </MenuButtons>
            </MenuElements>
          </MenuInner>
        </Menu>
      </TopAnchor>
    </Container>
  );
};

export default MenuBar;
