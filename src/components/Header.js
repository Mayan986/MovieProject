import React from "react";
import { StyleHeader, Userimg, Logo } from "./styles/HeaderStyled";
import { Link } from "react-router-dom";
import user from "../images/user.png";

export const Header = () => {
  return (
    <StyleHeader>
      <Link to="/">
        <Logo>Movie App</Logo>
      </Link>
      <Userimg>
        <img src={user} alt="" />
      </Userimg>
    </StyleHeader>
  );
};
