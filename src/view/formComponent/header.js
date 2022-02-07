import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderNavContents = () => {
  return (
    <HeaderNav>
      <Link to="/">
        <Icon src="image/R-formCDN_logo.png" />
      </Link>
      <RightColumn>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/form">Form</NavLink>
        <NavLink to="/">login</NavLink>
        <FormControl type="text" placeholder="Search" />
        <Button>Search</Button>
      </RightColumn>
    </HeaderNav>
  )
}

export default HeaderNavContents

//style
const HeaderNav = styled.div`
  background-color: #444444;
  display: flex;
  height: 60px;
  position: relative;
`
const Icon = styled.img`
  width: 120px;
  height: 50px;
  padding: 10px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`
const RightColumn = styled.div`
  display: flex;
  position: absolute;
  right: 5px;
  bottom: 5px;
  @media (max-width: 768px) {
    display: none;
  }
`
const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 18px;
  font-weight: 900;
  padding: 0 10px;
`
const FormControl = styled.input``
const Button = styled.button``
