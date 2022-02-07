import React from 'react'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import initialState from '../atoms/recoilState'
import { auth } from '../../firebase'

const SignUpComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmBtnState, setConfirmBtnState] = useState('')
  const [sendBtnState, setSendBtnState] = useState('')
  const [authUser, setAuthUser] = useRecoilState(initialState.authUserState)

  useEffect(() => {
    if (authUser.length !== 0) {
      auth.onAuthStateChanged((authUser) => {
        setAuthUser(authUser)
      })
    } else {
      console.log('No user information.')
      return authUser
    }
  }, [])

  console.log('show here', authUser)

  const onSubmit = (data, e) => console.log(data, e)
  const onError = (errors, e) => console.log(errors, e)

  const handleChangeEmail = (event) => {
    setEmail(event.currentTarget.value)
  }
  const handleChangePassword = (event) => {
    setPassword(event.currentTarget.value)
  }

  const handleConfirm = () => {
    window.setTimeout(() => {
      setConfirmBtnState('')
    }, 0)
    setSendBtnState('')
  }
  const handleTransparentBtn = () => {
    setConfirmBtnState('TransparentBtn')
    setSendBtnState('TransparentBtn')
  }

  const handleInput = (event) => {
    event.preventDefault()
    auth.createUserWithEmailAndPassword(email, password)
    window.alert('Account creation is complete!')
    const emailForm = document.getElementById('email')
    const passwordForm = document.getElementById('password')
    emailForm.value = ''
    passwordForm.value = ''
    setConfirmBtnState('')
    setSendBtnState('TransparentBtn')
  }

  return (
    <Wrapper>
      <Header>ユーザ登録</Header>
      <Form
        onChange={handleTransparentBtn}
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <ContentsWrap>
          <Label>メールアドレス: </Label>
          <Input
            id="email"
            type="email"
            placeholder="email"
            value={authUser.email}
            {...register('email', {
              required: 'This field is required',
              maxLength: { value: 254, message: 'this field maxlength is 254' },
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'This email adress is inValid',
              },
            })}
            onChange={(event) => {
              handleChangeEmail(event)
            }}
          />
          <InValid>
            {errors.email && <span>{errors.email.message}</span>}
          </InValid>
        </ContentsWrap>
        <ContentsWrap>
          <Label>パスワード: </Label>
          <Input
            id="password"
            type="password"
            placeholder="password"
            {...register('password', {
              required: 'This field is required',
              minLength: { value: 8, message: 'this field minLength is 8' },
              maxLength: { value: 30, message: 'this field maxlength is 30' },
              pattern: {
                value: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])[a-zA-Z0-9.?/-]/,
                message: 'password valid',
              },
            })}
            onChange={(event) => handleChangePassword(event)}
          />
          <InValid>
            {errors.password && <span>{errors.password.message}</span>}
          </InValid>
        </ContentsWrap>
        {confirmBtnState && email && password && (
          <Button id="confirmBtn" onClick={handleConfirm}>
            登録確認
          </Button>
        )}
        {!sendBtnState && isSubmitSuccessful && email && password && (
          <Button id="sendBtn" onClick={handleInput}>
            登録
          </Button>
        )}
      </Form>
    </Wrapper>
  )
}

export default SignUpComponent

const Wrapper = styled.div`
  margin: 50px;
`

const Header = styled.h1``
const Form = styled.form`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 10px;
`
const ContentsWrap = styled.div`
  display: flex;
  position: relative;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

const Label = styled.label`
  padding-right: 8px;
  margin: 10px 0;
  width: 15%;
  @media (max-width: 1024px) {
    margin: 0;
    width: 100%;
  }
`

const Input = styled.input`
  flex-grow: 1;
  margin: 10px 0 20px;
`

const InValid = styled.div`
  position: absolute;
  top: 30px;
  left: 125px;
  > span {
    font-size: 12px;
    color: #ff0a89;
  }
`

const Button = styled.button`
  border: inset 1px;
  border-color: rgb(118, 118, 118);
  border-radius: 3px;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
  padding: 10px;
  width: 100px;
  &:hover {
    border-color: lightblue;
  }
`
