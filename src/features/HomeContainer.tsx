// import router from 'next/dist/client/router'
import React, { useState } from 'react'
// import Button from '../components/Button'

import { Container, InputContainer, ButtonContainer } from './styles'

const HomeContainer = (): JSX.Element => {
  const [nickname, setNickname] = useState('')
  const [email, setEmail] = useState('')

  const handleChangeNickname = async (valueName: string) => {
    setNickname(valueName)
  }

  const handleChangeEmail = async (valueEmail: string) => {
    setEmail(valueEmail)
  }


  return (
    <>
      <Container>
        <img src="/ShowDoMilhãoLogo.png" alt="Logo" />

        <InputContainer>
          <input placeholder="Nome" onChange={(event) => handleChangeNickname(event.target.value)} value={nickname} />
          <input placeholder="E-Mail" onChange={(event) => handleChangeEmail(event.target.value)} value={email} />
        </InputContainer>

      </Container>
    </>
  )
}

export default HomeContainer
