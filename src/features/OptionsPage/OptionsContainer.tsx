import router from 'next/dist/client/router'
import axios from 'axios'
import React, { FormEvent, useEffect, useState } from 'react'
import Button from '../../components/Button'
import { OptionsPageContainer, OptionsContent, SelectContainer, Select } from './styles'

type CategoryProps = {
  id: number
  name: string
}

const OptionsContainer = (): JSX.Element => {
  const difficulty = [
    { name: 'Any', id: 'any' },
    { name: 'Easy', id: 'easy' },
    { name: 'Medium', id: 'medium' },
    { name: 'Hard', id: 'hard' }
  ]

  const [questionCategory, setQuestionCategory] = useState<CategoryProps[]>([])
  const [numberCount, setNumberCount] = useState('')

  const getQuestionsCategory = async () => {
    const response = await axios(`https://opentdb.com/api_category.php`)
    setQuestionCategory(response.data.trivia_categories)

    console.log(response.data)
  }

  const handleNumberCount = (event: FormEvent) => {
    event.preventDefault()
    // event.currentTarget.maxLength = 2
  }

  useEffect(() => {
    getQuestionsCategory()
  }, [])

  return (
    <>
      <OptionsPageContainer>
        <OptionsContent>
          <h1>Settings</h1>

          <SelectContainer>
            <div>
              <p>Amount</p>
              <form onChange={handleNumberCount}>
                <input
                  placeholder=" Quantidade de perguntas Max: 20"
                  name="amount"
                  type="number"
                  onChange={(event) => setNumberCount(event.target.value)}
                  value={numberCount}
                />
              </form>
            </div>
            <div>
              <p> category </p>
              <Select name="category">
                {questionCategory.map((QuestionCategory) => {
                  return (
                    <>
                      <option key={QuestionCategory.id} value={QuestionCategory.name}>
                        {QuestionCategory.name}
                      </option>
                    </>
                  )
                })}
              </Select>
            </div>
            <div>
              <p> difficulty </p>
              <Select name="difficulty">
                {difficulty.map((difficultyLevel, index) => {
                  return (
                    <>
                      <option key={difficultyLevel.id + index} value={difficultyLevel.name}>
                        {difficultyLevel.name}
                      </option>
                    </>
                  )
                })}
              </Select>
            </div>
          </SelectContainer>

          <Button onClick={() => router.push(`/`)} >Salvar Alterações</Button>
        </OptionsContent>
      </OptionsPageContainer>
    </>
  )
}

export default OptionsContainer
