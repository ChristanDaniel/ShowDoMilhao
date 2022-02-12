import axios from 'axios'

export const getUsers = async (amount:string, category:string) => {
  try {
    const { data } = await axios.get(`https://opentdb.com/api.php?amount=${amount}&category=${category}`)

    return data
  } catch (err) {
    throw new Error(err)
  }
}
