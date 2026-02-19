import generateRandNum from '../generateRandNum.js'
import checkAnswer from '../checkAnswer.js'
import askThreeQues from '../askThreeQues.js'
import askQues from '../askQues.js'

export default (name) => {
  console.log('Find the greatest common divisor of given numbers.')

  askThreeQues(name, askQuestion)
}

function askQuestion() {
  const a = generateRandNum(0, 100)
  const b = generateRandNum(0, 100)

  console.log(`Question: ${a} ${b}`)

  const userAnswer = askQues()
  const trueAnswer = gcd(a, b)

  const isAnswerTrue = checkAnswer(userAnswer, trueAnswer)
  return isAnswerTrue
}

const gcd = (a, b) => {
  a = Math.abs(a)
  b = Math.abs(b)

  while (b !== 0) {
    let temp = b
    b = a % b
    a = temp
  }
  return a
}
