import generateRandNum from './generateRandNum.js'
import readlineSync from 'readline-sync'

export default (name) => {
  console.log('What is the result of the expression?')

  let isAnswerTrue = true

  for (let i = 0; i < 3 && isAnswerTrue; i++) {
    isAnswerTrue = askQuestion()

    if (!(isAnswerTrue)) {
      console.log(`Let's try again, ${name}!`)
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
}

function askQuestion() {
  const a = generateRandNum()
  const b = generateRandNum()

  const symbols = ['*', '+', '-']
  const randSymb = symbols[Math.floor(Math.random() * 3)]

  console.log(`Question: ${a} ${randSymb} ${b}`)

  const userAnswer = readlineSync.question(`Your answer: `)
  const trueAnswer = randSymb === '+' ? a + b : randSymb === '-' ? a - b : randSymb === '*' ? a * b : 0

  const isAnswerTrue = userAnswer == trueAnswer

  console.log(
    isAnswerTrue
      ? 'Correct!'
      : `'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`,
  )

  return isAnswerTrue
}
