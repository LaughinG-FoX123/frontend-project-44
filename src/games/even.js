import readlineSync from 'readline-sync'
import generateRandNum from '../generateRandNum.js'
import checkAnswer from '../checkAnswer.js'
import askThreeQues from '../askThreeQues.js'
import askQues from '../askQues.js'


export default (name) => {
  console.log(`Answer "yes" if the number is even, otherwise answer "no".`)

  askThreeQues(name, askQuestion)
}

const askQuestion = () => {
  const randNum = generateRandNum(0, 100)
  console.log(`Question: ${randNum} `)
  const userAnswer = askQues()

  const isNumEven = randNum % 2 == 0
  const trueAnswer = isNumEven ? 'yes' : 'no'

  const isAnswerTrue = checkAnswer(userAnswer, trueAnswer)

  return isAnswerTrue
}
