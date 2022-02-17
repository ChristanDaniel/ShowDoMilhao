import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { gameState, IGameState } from '../../redux/game/gameModel'

import { getListQuestions } from '../../services/GamePage/PageListService'

import { GamerContainer, HeaderGameContainer, BodyGameContainer, QuestionsGameContainer, QuestionsCategoryContent, QuestionsButtons } from './styles'

type AllQuestions = {
  category: string
  correct_answer: string
  difficulty: string
  incorrect_answers: string[]
  question: string
  type: string
}

const GameContainer = (): JSX.Element => {
  const gameStore = useSelector<gameState, IGameState>((state) => state.game)

  const [getAllQuestions, setGetAllQuestions] = useState<AllQuestions[]>([])
  const [teste1234, setTeste1234] = useState('')

  const getQuestionList = async () => {
    const response = await getListQuestions()
    setGetAllQuestions(response.results)
  }

  useEffect(() => {
    getQuestionList()
  }, [])

  const listOrdenada = (incorrect_answers: string[]) => {
    // return pokeList.sort((a, b) => a.id - b.id)
    return incorrect_answers[Math.floor(Math.random() * incorrect_answers.length)]
  }

  return (
    <>
      <GamerContainer>
        <HeaderGameContainer>
          <div>
            <p>{gameStore.login?.name}</p>
            <p>{gameStore.login?.email}</p>
          </div>
          <span>Pontuação - {gameStore.score}</span>
        </HeaderGameContainer>
        <BodyGameContainer>
          <div>
            {getAllQuestions.map((AllQuestion, index) => {
              if (AllQuestion.incorrect_answers.length < 4) {
                return AllQuestion.incorrect_answers.push(AllQuestion.correct_answer)
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
                              onClick={() => {
                                setTeste1234(wrong_answer)
                              }}
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
