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

  const handleNumberCount = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault()
    event.currentTarget.maxLength = 2
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
              <input type="number" name="amount" />
            </div>
            <div>
              <p> category </p>
              {/* <Select name="category">
                {teste2.map((test) => {
                  return(
                    <>
                      <option key={test.id} value={test.name}>{test.name}</option>
                    </>
                  )
                })}
              </Select> */}
            </div>
            <div>
              <p> difficulty </p>
              <Select name="difficulty"></Select>
            </div>
            <div>
              <p> type </p>
              <Select name="type"></Select>
            </div>
          </SelectContainer>

          <Button>Salvar Alterações</Button>
        </OptionsContent>
      </OptionsPageContainer>
    </>
  )
}

export default OptionsContainer
