import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderStyle = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
  border: 1px solid black;
  background-color: skyblue;
  text-align: center;
  margin: 10px;
  height: 40px;
`;

const ListStyle = styled.li`
  padding-top: 5px;
  list-style-type: none;
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 15px;
  font-weight: 500;
`;

const header = () => {
  return (
    <HeaderStyle>
      <ListStyle>
        <LinkStyle to="/">영화목록</LinkStyle>
      </ListStyle>
      <ListStyle>
        <LinkStyle to="/movie">영화등록</LinkStyle>
      </ListStyle>
    </HeaderStyle>
  );
};

export default header;
