import React, { useState } from 'react'
import router from 'next/dist/client/router'
import Button from '../../components/Button'

import { Container, InputContainer, ButtonContainer } from './styles'

import { useDispatch } from 'react-redux'
import { updateGameData } from '../../redux/game/gameActions'
import { Footer } from '../../components/Footer'

const HomeContainer = (): JSX.Element => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()

  const handleLogin = async (name: string, email: string) => {
    dispatch(updateGameData({ login: { name: name, email: email } }))

    router.push(`/game`)
  }

  return (
    <>
      <Container>
        <img src="/ShowDoMilhãoLogo.png" alt="Logo" />

        <InputContainer>
          <input placeholder="Nome" onChange={(event) => setName(event.target.value)} value={name} />
          <input placeholder="E-Mail" onChange={(event) => setEmail(event.target.value)} value={email} />
        </InputContainer>

        <ButtonContainer>
          <Button onClick={() => handleLogin(name, email)}>Jogar</Button>
          <Button onClick={() => router.push(`/options`)}>Editar Perguntas</Button>
        </ButtonContainer>

        <Footer />
      </Container>
    </>
  )
}

export default HomeContainer
