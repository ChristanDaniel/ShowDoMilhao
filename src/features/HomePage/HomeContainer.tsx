import router from 'next/dist/client/router'
import React, { FormEvent, useState } from 'react'
import Button from '../../components/Button'

import { Container, InputContainer, ButtonContainer } from './styles'

import { useGetGameData, useUpdateGameData } from '../../redux/game/gameHooks'
import { useDispatch } from 'react-redux'
import { updateGameData } from '../../redux/game/gameActions'


const HomeContainer = (): JSX.Element => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()

  const getTest = async (name: string, email: string) => {
    dispatch(updateGameData({login: {name: name, email: email}}))
  }
  const gameStore = useGetGameData();
  console.log('LoginStore', gameStore)

  const handleSubmitForm = (event: FormEvent) => {
    event.preventDefault();
  }

  return (
    <>
      <Container>
        <img src="/ShowDoMilhãoLogo.png" alt="Logo" />

        <InputContainer onSubmit={handleSubmitForm}>
          <input placeholder="Nome" onChange={(event) => setName(event.target.value)} value={name} />
          <input placeholder="E-Mail" onChange={(event) => setEmail(event.target.value)} value={email} />
        </InputContainer>

        <ButtonContainer>
          <Button onClick={() => getTest(name, email)}>Jogar</Button>
          <Button onClick={() => router.push(`/options`)}>Editar Perguntas</Button>
        </ButtonContainer>
      </Container>
    </>
  )
}

export default HomeContainer
