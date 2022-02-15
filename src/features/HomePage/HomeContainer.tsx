import router from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import Button from '../../components/Button'

import { Container, InputContainer, ButtonContainer } from './styles'

import { useGetGameData } from '../../redux/game/gameHooks'
import { useDispatch } from 'react-redux'
import { updateGameData } from '../../redux/game/gameActions'
import { getListQuestions } from '../../services/GamePage/PageListService'

const HomeContainer = (): JSX.Element => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()

  const handleLogin = async (name: string, email: string) => {
    dispatch(updateGameData({ login: { name: name, email: email } }))
  }

  const gameStore = useGetGameData()
  console.log('LoginStore', gameStore)

  const getQuestionList = async () => {
    const response = await getListQuestions()
    console.log('response', response)
  }

  useEffect(() => {
    getQuestionList()
  }, [])

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
      </Container>
    </>
  )
}

export default HomeContainer
