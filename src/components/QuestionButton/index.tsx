import { ButtonHTMLAttributes } from 'react'
import React from 'react'

import { QuestionButtons } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const QuestionButton = ({ ...props }: ButtonProps) => {
  return <QuestionButtons {...props} />
}

export default QuestionButton
