import readlineSync from 'readline-sync'
import generateRandNum from './generateRandNum.js'
import isEven from './isEven.js'


export default () => {
  const randNum = generateRandNum()
  const answer = readlineSync.question(`Question: ${randNum} `)
  
  const isAnsTrue = isAnswerTrue(randNum, answer)

  return isAnsTrue
}

function isAnswerTrue(randNum, answer) {
  const isNumEven = isEven(randNum)

  return (answer === `yes`) === isNumEven
}
