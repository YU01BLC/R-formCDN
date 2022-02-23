import React, { useState } from 'react'
import styled from 'styled-components'

const SidebarContents = () => {
  const [view, setView] = useState(false)

  return (
    <Wrapper>
      <Nav onMouseOver={() => setView(true)} onMouseOut={() => setView(false)}>
        <Add>Add</Add>
        <Dialog className={view ? 'showDialog' : ''}>
          <ItemList>
            <Item className={'itemList'}>Heading</Item>
            <Item className={'itemList'}>Description</Item>
            <Item className={'itemList'}>Images</Item>
            <Item className={'itemList'}>SubHeading</Item>
            <Item className={'itemList'}>link</Item>
          </ItemList>
        </Dialog>
      </Nav>
    </Wrapper>
  )
}

//style
const Wrapper = styled.div`
  margin-right: 10px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  @media (max-width: 768px) {
    display: none;
  }
`

const Nav = styled.div`
  background-color: white;
  margin-top: 10px;
  padding: 10px;
  float: right;
  width: 20%;
`

const Add = styled.div`
  padding: 8px;
  background-color: darkgrey;
`

const Dialog = styled.div`
  display: none;
  background-color: white;
  &&&.showDialog {
    display: initial;
  }
`
const ItemList = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Item = styled.p`
  border-radius: 10px;
  white-space: nowrap;
  padding: 6px;
  margin-right: 10px;
  cursor: pointer;
  background-color: #cccdcf;
`

export default SidebarContents
