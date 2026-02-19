import generateRandNum from '../generateRandNum.js'
import checkAnswer from '../checkAnswer.js'
import askThreeQues from '../askThreeQues.js'
import askQues from '../askQues.js'


export default (name) => {
  console.log('What is the result of the expression?')

  askThreeQues(name, askQuestion)  
}

function askQuestion() {
  const a = generateRandNum(0, 50)
  const b = generateRandNum(0, 50)

  const symbols = ['*', '+', '-']
  const randSymb = symbols[Math.floor(Math.random() * 3)]

  console.log(`Question: ${a} ${randSymb} ${b}`)

  const userAnswer = askQues()
  const trueAnswer = randSymb === '+' ? a + b : randSymb === '-' ? a - b : randSymb === '*' ? a * b : 0

  const isAnswerTrue = checkAnswer(userAnswer, trueAnswer)
  return isAnswerTrue
}
