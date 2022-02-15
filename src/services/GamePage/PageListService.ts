import { api } from '../api'
import { BASE_URL, BASE_URL_CATEGORY } from '../apiConstants'
import { getApiResponseProps } from './PageModel'

// export const getUsers = async (amount:string, category:string) => {
//   try {
//     const { data } = await axios.get(`https://opentdb.com/api.php?amount=${amount}&category=${category}`)

//     return data
//   } catch (err) {
//     throw new Error(err)
//   }
// }

export const getListQuestions = async (): Promise<getApiResponseProps> => {
  try {
    const { data } = await api.get<getApiResponseProps>(BASE_URL)
    console.log(BASE_URL)

    return data
  } catch (error) {
    throw new Error('Fail handleRequest getListQuestions')
  }
}

export const getListQuestionsCategory = async (categoryName: string): Promise<getApiResponseProps> => {
  try {
    const { data } = await api.get<getApiResponseProps>(BASE_URL_CATEGORY, {
      params: { categoryName }
    })

    return data
  } catch (error) {
    throw new Error('Fail handleRequest getListQuestionsCategory')
  }
}


