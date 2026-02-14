import readlineSync from 'readline-sync'
import generateRandNum from './generateRandNum.js'
import isEven from './isEven.js'

export default () => {
  const randNum = generateRandNum()
  console.log(`Question: ${randNum} `)
  const answer = readlineSync.question(`Your answer: `)

  const isAnsTrue = isAnswerTrue(randNum, answer)

  return isAnsTrue
}

function isAnswerTrue(randNum, answer) {
  const isNumEven = isEven(randNum)
  const trueAnswer = isNumEven ? 'yes' : 'no'

  const isAnswerTrue = answer === trueAnswer

  console.log(
    isAnswerTrue
      ? 'Correct!'
      : `'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`,
  )

  return isAnswerTrue
}
