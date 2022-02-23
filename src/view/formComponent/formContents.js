import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import initialState from '../atoms/recoilState'

const FormContents = () => {
  // localState
  const [headText, setHeadText] = useState('')
  const [subHeadText, setSubHeadText] = useState('')
  const [mainText, setMainText] = useState('')
  const [fileUrl, setFileUrl] = useState(null)
  // RecoilState
  const [formList, setFormList] = useRecoilState(initialState.formListState)
  const [formKeyNum, setFormKeyNum] = useRecoilState(
    initialState.formKeyNumState
  )

  const handleImage = (event) => {
    const imageFile = event.target.files[0]
    const imageUrl = URL.createObjectURL(imageFile)
    setFileUrl(imageUrl)
  }
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
    <>
      {formList.map((formItem) => (
        <span key={('keyNum', formKeyNum)} item={formItem}>
          <ComponentWrapper className="wrapper">
            <Component>
              <ToolBer>
                <AddIcon src="image/addIcon.png" onClick={addFormItem} />
                <DelIcon
                  src="image/deleteIcon.png"
                  onClick={() => {
                    document.querySelector('.wrapper').remove()
                  }}
                />
              </ToolBer>
              <SubHead>Heading (h2)</SubHead>
              <Input
                type="text"
                placeholder="Add heading"
                onChange={(e) => {
                  setHeadText(e.target.value)
                  console.log(headText)
                }}
              />
              <SubHead>SubHead (h3)</SubHead>
              <Input
                type="text"
                placeholder="Add SubHeading"
                onChange={(e) => {
                  setSubHeadText(e.target.value)
                }}
              />
              <SubHead>MainText (p)</SubHead>
              <Input
                type="text"
                placeholder="Add SubText"
                onChange={(e) => {
                  setMainText(e.target.value)
                }}
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
        </span>
      ))}
    </>
  )
}

export default FormContents
//style
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

const ToolBer = styled.div`
  margin-left: auto;
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
  display: flex;
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
