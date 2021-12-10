import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <InfoWrapper>
        <Title>The Bestsellers</Title>
        <Info>Amazon Top 50 Bestselling Books</Info>
        <Info>2009 - 2019</Info>
      </InfoWrapper>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  background-image: url(./Library.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 30vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InfoWrapper = styled.div`
  background-color: #092523;
  text-align: center;
  padding: 10px 30px;
`;

const Title = styled.h2`
  font-family: "League Script", cursive;
  color: #feedd3;
  font-size: 50px;
  text-align: center;

  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 70px;
    margin-bottom: 0;
  }
`;

const Info = styled.h3`
  color: #feedd3;
`;
