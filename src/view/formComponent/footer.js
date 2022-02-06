import React from 'react';
import styled from 'styled-components';

const FooterNavContents = () => {
  return (
    <FooterNav>
      <RightColumn>
        <NavLink href='#home'>Home</NavLink>
        <NavLink href='#link'>Link</NavLink>
        <NavLink href='#hoge'>Hoge</NavLink>
        <FormControl type='text' placeholder='Search' />
        <Button>Search</Button>
      </RightColumn>
    </FooterNav>
  );
};

export default FooterNavContents;

//style
const FooterNav = styled.div`
  background-color: #444444;
  display: flex;
  height: 40px;
  position: relative;
`;
const RightColumn = styled.div`
  display: flex;
  position: absolute;
  right: 5px;
  bottom: 5px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const NavLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 18px;
  font-weight: 900;
  padding: 0 10px;
`;
const FormControl = styled.input``;
const Button = styled.button``;
