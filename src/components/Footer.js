import React from "react";
import { FooterStyled } from "./styles/FooterStyled";

export const Footer = () => {
  return (
    <FooterStyled>
      <div style={{ fontSize: "1.75rem", marginBottom: "1.3rem" }}>
        Movie App
      </div>
      <div style={{ fontSize: "1.35rem" }}>
        &copy;2021,Movie Inc. or its afflicates
      </div>
    </FooterStyled>
  );
};
