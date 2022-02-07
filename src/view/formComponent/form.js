import React, { useState, useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import styled from 'styled-components'
import SidebarContents from './sidebar'
import initialState from '../atoms/recoilState'

const FormComponent = () => {
  const [headText, setHeadText] = useState('')
  const [subHead, setSubHead] = useState('')
  const [mainText, setMainText] = useState('')
  const [fileUrl, setFileUrl] = useState(null)
  const [formNum, setFormNum] = useState(0)

  const formList = useRecoilValue(initialState.formListState)
  const setFormList = useSetRecoilState(initialState.formListState)

  useEffect(() => {
    setFormList((formList) => [...formList, {}])
  }, [])

  const addItem = () => {
    if (1000 > formNum) {
      setFormNum(formNum + 1)
    }
    setFormList((oldFormList) => [
      ...oldFormList,
      {
        head: headText,
        sub: subHead,
        text: mainText,
        img: fileUrl,
        isComplete: false,
      },
    ])
    setHeadText('')
    setSubHead('')
    setMainText('')
    setFileUrl(null)
  }
  const handleSetText = ({ target: { value } }) => {
    setMainText(value)
  }

  const handleImage = (event) => {
    const imageFile = event.target.files[0]
    const imageUrl = URL.createObjectURL(imageFile)
    setFileUrl(imageUrl)
  }
  console.log(formNum)
  return (
    <Wrapper>
      <SidebarContents />
      <FormWrapper>
        <Form placeholder="Add title (h1)" />
        {formList.map((formItem) => (
          <ComponentWrapper
            key={('keyNum', formNum)}
            item={formItem}
            className="wrapper"
          >
            <Component>
              <Toolber>
                <AddIcon src="image/addIcon.png" onClick={addItem} />
                <DelIcon
                  src="image/deleteIcon.png"
                  onClick={() => {
                    document.querySelector('.wrapper').remove()
                  }}
                />
              </Toolber>
              <SubHead>Heading (h2)</SubHead>
              <Input
                type="text"
                placeholder="Add heading"
                onChange={(e) => {
                  setHeadText(e.target.value)
                }}
              />
              <SubHead>SubHead (h3)</SubHead>
              <Input
                type="text"
                placeholder="Add SubHeading"
                onChange={(e) => {
                  setSubHead(e.target.value)
                }}
              />
              <SubHead>MainText (p)</SubHead>
              <Input
                type="text"
                placeholder="Add SubText"
                onChange={handleSetText}
              />
              <SubHead>image (img)</SubHead>
              <ImageSpace>
                <SetImage>
                  Add Image
                  <File
                    type="file"
                    className="filename"
                    onChange={handleImage}
                  />
                </SetImage>
              </ImageSpace>
              <Image src={fileUrl} />
            </Component>
          </ComponentWrapper>
        ))}
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
