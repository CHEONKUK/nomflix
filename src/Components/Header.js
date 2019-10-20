import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  &:hover {
    background-color: red;
  }
`;

const Header = styled.header``;

const Item = styled.li``;

const SLink = styled(Link)``;

export default () => (
  <Header>
    <List>
      <Item>
        <Link to="/">Moives</Link>
      </Item>
      <Item>
        <Link to="/tv">TV</Link>
      </Item>
      <Item>
        <Link to="/search">Search</Link>
      </Item>
    </List>
  </Header>
);
