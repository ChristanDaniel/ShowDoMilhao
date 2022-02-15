import router from 'next/dist/client/router'
import React, { FormEvent, useState } from 'react'
import Button from '../../components/Button'
// import { useDispatch, useSelector } from 'react-redux'

// import { SEND_USER_INFO } from '../../redux/actions'

import { Container, InputContainer, ButtonContainer } from './styles'
import { reducersCombined } from '../../redux/reducers'
import { useLoginGetGameData, useUpdateGameLoginData } from '../../redux/login/loginHooks'
import { useGetGameData, useUpdateGameData } from '../../redux/game/gameHooks'
import { useDispatch } from 'react-redux'
import { updateGameData } from '../../redux/game/gameActions'

// function teste2(name: string, email: string) {
//   return { type: SEND_USER_INFO, name, email}
// }


type Teste123 = {
  id: string
}

const HomeContainer = (): JSX.Element => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()

  // const dispatch = useDispatch()



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
