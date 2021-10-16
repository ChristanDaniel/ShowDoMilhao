// import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from '../../components/Button'
import { OptionsPageContainer, OptionsContent, SelectContainer, Select } from './styles'

const OptionsContainer = (): JSX.Element => {

  // const [teste2, setTeste2] = useState([])

  // const getAllPokemon = async () => {
  //   const response = await axios(`https://opentdb.com/api_category.php`)
  //   // const response = await axios(`https://opentdb.com/api.php?amount=10`)
  //   setTeste2(response.data.trivia_categories)

  //   console.log(response)
  // }

  // useEffect(() => {
  //   getAllPokemon()
  // }, [])

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
