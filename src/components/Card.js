import React from "react";
import styled from "styled-components";

export const Card = ({ data }) => {
  return (
    <CardItem>
      <div className="CardInner">
        <CardTop>
          <img src={data.Poster} alt={data.Title} />
        </CardTop>
        <CardBottom>
          <CardInfo>
            <h4>{data.Title}</h4>
            <p>{data.Year}</p>
          </CardInfo>
        </CardBottom>
      </div>
    </CardItem>
  );
};
const CardItem = styled.div`
  background: ${({ theme }) => theme.color.secondary};
  cursor: pointer;
`;
const CardTop = styled.div`
  height: 30rem;
  img {
    width: 100%;
    height: 100%;
  }
`;
const CardInfo = styled.div`
  color: ${({ theme }) => theme.color.fontPrimary};
  h4 {
    font-size: 2.2rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }
`;
const CardBottom = styled.div`
  padding: 2rem;
`;
