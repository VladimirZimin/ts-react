import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  color: grey;

  &.active {
    color: orange;
  }
`;

const Home = () => {
  return (
    <ul>
      <li>
        <StyledLink to="/">Home</StyledLink>
      </li>
      <li>
        <StyledLink to="/counter">Counter</StyledLink>
      </li>
      <li>
        <StyledLink to="/color">ColorPicker</StyledLink>
      </li>
      <li>
        <StyledLink to="/form">Form</StyledLink>
      </li>
      <li>
        <StyledLink to="/todo">ToDo</StyledLink>
      </li>
    </ul>
  );
};

export default Home;
