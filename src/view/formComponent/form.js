import React, { useState, useEffect } from 'react'
import {
  atom,
  selector,
  useRecoilValue,
  useRecoilState,
  useSetRecoilState,
} from 'recoil'
import styled from 'styled-components'
import SidebarContents from './sidebar'
import initialState from '../atoms/recoilState'
import FormContents from '../formComponent/formContents'

const FormComponent = () => {
  // localState
  const [headText, setHeadText] = useState('')
  const [subHeadText, setSubHeadText] = useState('')
  const [mainText, setMainText] = useState('')
  const [fileUrl, setFileUrl] = useState(null)
  const [addContents, setAddContents] = useState('')
  // recoilState
  const setFormList = useSetRecoilState(initialState.formListState)
  const [formKeyNum, setFormKeyNum] = useRecoilState(
    initialState.formKeyNumState
  )

  const newFormId = () => {
    setFormKeyNum(formKeyNum + 1)
  }
  const addFormItem = () => {
    newFormId()
    setFormList((oldFormList) => [
      ...oldFormList,
      {
        head: headText,
        sub: subHeadText,
        text: mainText,
        img: fileUrl,
        isComplete: false,
      },
    ])
    setHeadText('')
    setSubHeadText('')
    setMainText('')
    setFileUrl(null)
  }

  return (
    <Wrapper>
      <SidebarContents />
      <FormWrapper>
        <Form placeholder="Add title (h1)" />
        <AddContents>
          <Item className={'Heading'} onClick={addFormItem}>
            Heading
          </Item>
          <Item className={'SubHead'} onClick={addFormItem}>
            SubHead
          </Item>
          <Item className={'MainText'}>MainText</Item>
          <Item className={'image'}>image</Item>
        </AddContents>
        <FormContents />
      </FormWrapper>
    </Wrapper>
  )
}

export default FormComponent

//style
const Wrapper = styled.div`
  @media (max-width: 768px) {
    margin: 0 10px;
  }
`

const AddContents = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    margin: 0 10px;
  }
`
const Item = styled.p`
  border-radius: 10px;
  white-space: nowrap;
  padding: 6px;
  margin-right: 10px;
  cursor: pointer;
  background-color: #cccdcf;
`

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding-top: 20px;
  @media (max-width: 768px) {
    width: 100%;
  }
`
const Form = styled.input`
  border: solid darkgrey;
  font-weight: 600;
  font-size: 24px;
  flex-grow: 1;
  height: 40px;
  outline: none;
`

const ComponentWrapper = styled.div`
  background-color: white;
  position: relative;
  margin-top: 20px;
  padding: 20px 20px 70px 20px;
`

const Component = styled.div`
  display: flex;
  flex-direction: column;
`

const Toolber = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`
const DelIcon = styled.img`
  height: 15px;
  margin-right: 2px;
  cursor: pointer;
`

const AddIcon = styled.img`
  height: 15px;
  margin-right: 10px;
  cursor: pointer;
`

const SubHead = styled.div`
  font-weight: 600;
  padding-right: 10px;
  color: #5e5e5e;
`
const Input = styled.textarea`
  flex-grow: 1;
  margin: 10px 0 20px;
`

const File = styled.input`
  display: none;
`

const SetImage = styled.p`
  border: inset 1px;
  border-color: rgb(118, 118, 118);
  border-radius: 3px;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
  padding: 10px;
  width: 100px;
  &:hover {
    border-color: lightblue;
  }
`

const Image = styled.img`
  width: 30%;
  height: 30%;
`

const ImageSpace = styled.label`
  width: 0;
  height: 0;
`
