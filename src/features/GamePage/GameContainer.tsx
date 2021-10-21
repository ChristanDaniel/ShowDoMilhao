// import axios from 'axios'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Button from '../../components/Button'
// import Button from '../../components/Button'
import { GamerContainer, HeaderGameContainer, BodyGameContainer, QuestionsGameContainer, QuestionsCategoryContent } from './styles'

type AllQuestions = {
  id?: number
  category?: string
  correct_answer?: string
  difficulty?: string
  incorrect_answers: string[]
  question?: string
}

type Teste123 = [{
    name: string,
    email: string
}]

const GameContainer = (): JSX.Element => {
  const [getAllQuestions, setGetAllQuestions] = useState<AllQuestions[]>([])

  const AllQuestions = async () => {
    const response = await axios(`https://opentdb.com/api.php?amount=10`)

    const testeMilagroso = response.data.results

    setGetAllQuestions(testeMilagroso)
  }

  const User: Teste123 = useSelector((state) => state.rootReducer.game.user)


  useEffect(() => {
    AllQuestions()
  }, [])

  return (
    <>
      <GamerContainer>
        <HeaderGameContainer>
          {User.map((Sera, index) => {
            console.log(Sera)
            return(
              <>
              <p key={index.toString()}>Nome: {Sera.name}</p> <span>Email: {Sera.email}</span>
              </>
            )
          })}
          <span>Pontuação</span>
        </HeaderGameContainer>
        <BodyGameContainer>
          <div>
          {getAllQuestions.map((AllQuestion, index) => {
            return (
              <>
                <QuestionsGameContainer key={AllQuestion.id}>
                  <QuestionsCategoryContent>
                    <h2>Pergunta N {index.toString()}</h2>
                    <span>Categoria: {AllQuestion.category}</span>
                  </QuestionsCategoryContent>
                  <p>{AllQuestion.question}</p>
                  <div>
                    <Button>{AllQuestion.correct_answer}</Button>
                    {AllQuestion.incorrect_answers.map((wrong_answer, index) => {
                      return (
                        <>
                          <Button key={AllQuestion.id + index.toString()}>{wrong_answer}</Button>
                        </>
                      )
                    })}
                  </div>
                </QuestionsGameContainer>
              </>
            )
          })}
          </div>
        </BodyGameContainer>
      </GamerContainer>
    </>
  )
}

export default GameContainer
