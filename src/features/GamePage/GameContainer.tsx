// import axios from 'axios'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Button from '../../components/Button'
// import Button from '../../components/Button'
import { GamerContainer, HeaderGameContainer, BodyGameContainer, QuestionsGameContainer, QuestionsCategoryContent } from './styles'


const GameContainer = (): JSX.Element => {
  return (
    <>
      <GamerContainer>
        <HeaderGameContainer>
          <p key={index.toString()}>Nome: {Sera.name}</p> <span>Email: {Sera.email}</span>
          <span>Pontuação</span>
        </HeaderGameContainer>
        <BodyGameContainer>
          <div>
            <QuestionsGameContainer key={AllQuestion.id}>
              <QuestionsCategoryContent>
                <h2>Pergunta N {index.toString()}</h2>
                <span>Categoria: {AllQuestion.category}</span>
              </QuestionsCategoryContent>
              <p>{AllQuestion.question}</p>
              <div>
                <Button disabled={!!AllQuestion.correct_answer}>{AllQuestion.correct_answer}</Button>

                <Button key={AllQuestion.id + index.toString()}>{wrong_answer}</Button>
              </div>
            </QuestionsGameContainer>
          </div>
        </BodyGameContainer>
      </GamerContainer>
    </>
  )
}

export default GameContainer
