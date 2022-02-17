// import axios from 'axios'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getListQuestions } from '../../services/GamePage/PageListService'

// import Button from '../../components/Button'
// import QuestionsButton from '../../components/QuestionsButton'
// import { QuestionButtons, QuestionsButtons } from '../../components/QuestionsButton/styles'

// import Button from '../../components/Button'
import { GamerContainer, HeaderGameContainer, BodyGameContainer, QuestionsGameContainer, QuestionsCategoryContent, QuestionsButtons } from './styles'

type AllQuestions = {
  category: string
  correct_answer: string
  difficulty: string
  incorrect_answers: string[]
  question: string
  type: string
}

type Teste123 = [
  {
    name: string
    email: string
  }
]

const GameContainer = (): JSX.Element => {
  const [getAllQuestions, setGetAllQuestions] = useState<AllQuestions[]>([])
  const [teste1234, setTeste1234] = useState('')
  // const gameStore = useGetGameData().login
  // console.log('LoginStore', gameStore)
  const gameStore = useSelector((store) => store)
  console.log('GAMESTORE', gameStore)

  const getQuestionList = async () => {
    const response = await getListQuestions()
    setGetAllQuestions(response.results)

    console.log('RESPONSE', response)
  }

  useEffect(() => {
    getQuestionList()


  }, [])

  const listOrdenada = (incorrect_answers: string[]) => {
    // return pokeList.sort((a, b) => a.id - b.id)
    return incorrect_answers[Math.floor(Math.random()*incorrect_answers.length)]
  }

  return (
    <>
      <GamerContainer>
        <HeaderGameContainer>
          {/* {User.map((Sera, index) => {
            console.log(Sera)
            return (
              <>
                <p key={index.toString()}>Nome: {Sera.name}</p> <span>Email: {Sera.email}</span>
              </>
            )
          })} */}
          <span>Pontuação  - {gameStore.game.login.name} -- {gameStore.game.login.email}</span>
        </HeaderGameContainer>
        <BodyGameContainer>
          <div>
            {getAllQuestions.map((AllQuestion, index) => {
              if (AllQuestion.incorrect_answers.length < 4) {
                return (AllQuestion.incorrect_answers.push(AllQuestion.correct_answer))
              }
              return (
                <>
                  <QuestionsGameContainer key={AllQuestion.category}>
                    <QuestionsCategoryContent>
                      <h2>Pergunta N {index.toString()}</h2>
                      <span>Categoria: {AllQuestion.category}</span>
                    </QuestionsCategoryContent>
                    <p>{AllQuestion.question}</p>
                    {/* <Button>{AllQuestion.correct_answer}</Button> */}
                    {AllQuestion.incorrect_answers.map((wrong_answer, index) => {
                      return (
                        <>
                          <div key={index}>
                            <QuestionsButtons
                              // onClick={() => {setTeste1234(wrong_answer === AllQuestion.correct_answer)}}
                              // classButton={teste1234}
                              onClick={() => {setTeste1234(wrong_answer)}}
                              classButton={wrong_answer === AllQuestion?.correct_answer}
                              userClicked={teste1234 === AllQuestion?.correct_answer}

                              // incorrectAnswers={AllQuestion.incorrect_answers}
                              // correctAnswer={AllQuestion.correct_answer}
                            >
                              {wrong_answer}
                            </QuestionsButtons>
                          </div>
                        </>
                      )
                    })}
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
