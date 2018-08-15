
import React from 'react';
import styled from 'styled-components';
import  { githubImage } from '../../assets/images';

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: palevioletred;
`;


const Logo = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
`

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100px;
`



const Avatar = styled.div`
  position: absolute;
  top: 20px;
  right: 5%;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  z-index: 1000;
`

function Header({title, children}) {
return (
  <StyledHeader>
    <Title>{title}</Title>
    <Avatar>
      {children}
      <Logo src={githubImage} />
    </Avatar>  
  </StyledHeader>
);
}

export default Header