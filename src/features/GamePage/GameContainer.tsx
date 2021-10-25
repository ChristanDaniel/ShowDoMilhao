// import axios from 'axios'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Button from '../../components/Button'
import QuestionsButton from '../../components/QuestionsButton'
import { QuestionButtons, QuestionsButtons } from '../../components/QuestionsButton/styles'

// import Button from '../../components/Button'
import { GamerContainer, HeaderGameContainer, BodyGameContainer, QuestionsGameContainer, QuestionsCategoryContent } from './styles'


type AllQuestions = {
  id?: number
  category?: string
  correct_answer?: string
  difficulty?: string
  question?: string
}

type Teste123 = [{
    name: string,
    email: string
}]

const GameContainer = (): JSX.Element => {
  const [getAllQuestions, setGetAllQuestions] = useState<AllQuestions[]>([])
  // const [teste123, setTeste123] = useState([])
  // const [groupingQuestions, setGroupingQuestions] = useState([])

  const AllQuestions = async () => {
    const response = await axios(`https://opentdb.com/api.php?amount=10`)
    console.log(response)

    const testeMilagroso = response.data.results
    setGetAllQuestions(testeMilagroso)

    // setTeste123(teste1233)
    // setGroupingQuestions(response.data.results)
    // console.log('TESTE GROUPING', groupingQuestions)
  }


  const User: Teste123 = useSelector((state) => state.rootReducer.game.user)



  // const listOrdenada = (incorrect_answers: string[]) => {
  //   // return pokeList.sort((a, b) => a.id - b.id)
  //   return incorrect_answers[Math.floor(Math.random()*incorrect_answers.length)]
  // }



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
            const TodasPerguntas = incorrectAnswers.push(correctAnswer)
            return (
              <>
                <QuestionsGameContainer key={AllQuestion.id}>
                  <QuestionsCategoryContent>
                    <h2>Pergunta N {index.toString()}</h2>
                    <span>Categoria: {AllQuestion.category}</span>
                  </QuestionsCategoryContent>
                  <p>{AllQuestion.question}</p>
                  {/* <QuestionsButton
                    incorrectAnswers={AllQuestion.incorrect_answers}
                    correctAnswer={AllQuestion.correct_answer}
                  >{AllQuestion.incorrect_answers}</QuestionsButton> */}
                  <div>
                    <Button>{AllQuestion.correct_answer}</Button>
                    {console.log('asdasd', AllQuestion.incorrect_answers)}
                    {AllQuestion.incorrect_answers.map((wrong_answer, index) => {
                      return (
                        <>
                          <QuestionsButton key={AllQuestion.id + index.toString()}
                            incorrectAnswers={AllQuestion.incorrect_answers}
                            correctAnswer={AllQuestion.correct_answer}>{TodasPerguntas}</QuestionsButton>
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
