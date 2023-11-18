import { Outlet, NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  color: grey;

  &.active {
    color: orange;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 20px 40px;
  border-bottom: 2px solid #353340;
  color: white;

  & div {
    font-size: 22px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const Layout = () => {
  return (
    <>
      <Header>
        <div>React TypeScript</div>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/counter">Counter</StyledLink>
          <StyledLink to="/color">ColorPicker</StyledLink>
          <StyledLink to="/form">Form</StyledLink>
          <StyledLink to="/todo">ToDo</StyledLink>
        </Nav>
      </Header>
      <main style={{ padding: " 0 50px" }}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
