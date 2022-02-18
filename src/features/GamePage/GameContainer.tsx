import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { gameState, IGameState } from '../../redux/game/gameModel'

import { getListQuestions } from '../../services/GamePage/PageListService'
import { IResults } from '../../services/GamePage/PageModel'

import { GamerContainer, HeaderGameContainer, BodyGameContainer, QuestionsGameContainer, QuestionsCategoryContent, QuestionsButtons } from './styles'

type AllQuestions = {
  id: number
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
    // setGetAllQuestions(response.results)
    console.log('RESPONSE', response)

    response.results.map((question) => {
      shuffleArray(question.incorrect_answers).push(question.correct_answer)
      setGetAllQuestions((quest) => [
        ...quest,
        {
          id: Math.random(),
          category: question.category,
          correct_answer: question.correct_answer,
          difficulty: question.difficulty,
          incorrect_answers: question.incorrect_answers,
          question: question.question,
          type: question.type
        }
      ])
    })
  }

  const shuffleArray = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  console.log('getAllQuestions', getAllQuestions)

  useEffect(() => {
    getQuestionList()
  }, [])

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
              return (
                <QuestionsGameContainer key={AllQuestion.id + index}>
                  <QuestionsCategoryContent>
                    <h2>Pergunta N {index.toString()}</h2>
                    <span>Categoria: {AllQuestion.category}</span>
                  </QuestionsCategoryContent>
                  <p>{AllQuestion.question}</p>

                  {AllQuestion.incorrect_answers.map((wrong_answer, index) => {
                    return (
                      <div key={index + wrong_answer.length + 1}>
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
                    )
                  })}
                </QuestionsGameContainer>
              )
            })}
          </div>
        </BodyGameContainer>
      </GamerContainer>
    </>
  )
}

export default GameContainer
