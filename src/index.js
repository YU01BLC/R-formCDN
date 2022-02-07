import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import styled from 'styled-components'
import reportWebVitals from './reportWebVitals'
import NoMatch from './view/noMatch'
import HeaderNavContents from './view/formComponent/header'
import HomeComponent from './view/homeComponent/home'
import LoginComponent from './view/loginComponent/loginPage'
import SignUpComponent from './view/loginComponent/singUp'
import FormComponent from './view/formComponent/form'

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Container>
          <HeaderNavContents />
          <Routes>
            <Route path="/signUp" element={<SignUpComponent />} />
            <Route path="/home" element={<HomeComponent />} />
            <Route path="/" element={<LoginComponent />} />
            <Route path="/form" element={<FormComponent />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </RecoilRoot>
  )
}

const Container = styled.div``

ReactDOM.render(<App />, document.getElementById('root'))

reportWebVitals()
