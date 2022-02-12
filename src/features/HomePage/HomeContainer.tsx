import router from 'next/dist/client/router'
import React, { useState } from 'react'
import Button from '../../components/Button'
import { useDispatch, useSelector } from 'react-redux'

// import { SEND_USER_INFO } from '../../redux/actions'

import { Container, InputContainer, ButtonContainer } from './styles'

// function teste2(name: string, email: string) {
//   return { type: SEND_USER_INFO, name, email}
// }


type Teste123 = {
  id: string
}

const HomeContainer = (): JSX.Element => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [testeee, setTesteee] = useState('')

  const dispatch = useDispatch()

  const getTest = async () => {
    // dispatch({ type: SEND_USER_INFO, name, email})

    router.push(`/game`)
  }

  const porfavor = useSelector(state => state)
  console.log(porfavor)

  const handleChangeName = async (valueName: string) => {
    setName(valueName)
  }

  const handleChangeEmail = async (valueEmail: string) => {
    setEmail(valueEmail)
  }


  return (
    <>
      <Container>
        <img src="/ShowDoMilhãoLogo.png" alt="Logo" />

        <InputContainer>
          <input placeholder="Nome" onChange={(event) => handleChangeName(event.target.value)} value={name} />
          <input placeholder="E-Mail" onChange={(event) => handleChangeEmail(event.target.value)} value={email} />
        </InputContainer>

        <ButtonContainer>
          <Button onClick={() => getTest}>Jogar</Button>
          <Button onClick={() => router.push(`/options`)}>Editar Perguntas</Button>
        </ButtonContainer>
      </Container>
    </>
  )
}

export default HomeContainer
