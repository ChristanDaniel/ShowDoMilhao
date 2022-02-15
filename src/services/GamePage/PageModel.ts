interface IResults {
  category: string
  correct_answer: string
  difficulty: string
  incorrect_answers: string[]
  question: string
  type: string
}

interface IDate {
  response_code: number
  results: IResults[]
}

interface getApiResponseProps {
  data: IDate
}

export type { getApiResponseProps }
