import { ButtonHTMLAttributes, Children, useEffect, useState } from 'react'
import React from 'react'

import { QuestionsButtons } from './styles'
import Button from '../Button'
// import { useSelector } from 'react-redux'

// type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
interface QuestionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  incorrectAnswers: string[]
  correctAnswer: string
}

type Teste000 = {
  Questionsfinalizada: []
}

const QuestionButtons = ({ incorrectAnswers, correctAnswer, ...props }: QuestionButtonProps) => {
  // const [teste123, setTeste123] = useState([])
  // // const handleClassButton = async (incorrectAnswers: string, correctAnswer: string) => {
  // //     console.log('TESTE1', incorrectAnswers)
  // //     console.log('TESTE2', correctAnswer)
  // // }

  // useEffect(() => {

  //   console.log(incorrectAnswers)
  //   setTeste123(TodasPerguntas)
  // }, [])

  // onClick={() => handleClassButton(incorrectAnswers, correctAnswer)}
  // return (
  return (
          <Button  {...props}>
          </Button>
  )

  // {teste123.map((wrong_answers, index) => {
  //   return (
  //     <div key={index}>

  //       <QuestionsButtons {...props}
  //         incorrectAnswers
  //         correctAnswer
  //       >
  //         {wrong_answers}
  //       </QuestionsButtons>

  //     </div>

  //   )
  // })}
}

export default QuestionButtons
