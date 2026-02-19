export default (userAnswer, trueAnswer) => {
  const isAnswerTrue = userAnswer.toLowerCase() == trueAnswer

  console.log(
    isAnswerTrue
      ? 'Correct!'
      : `'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`,
  )
  return isAnswerTrue
}