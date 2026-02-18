import helloAndGetName from '../src/cli.js'
import readlineSync from 'readline-sync'
import generateRandNum from './generateRandNum.js'

export default (name) => {
  console.log(`Answer "yes" if the number is even, otherwise answer "no".`)

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

const askQuestion = () => {
  const randNum = generateRandNum()
  console.log(`Question: ${randNum} `)
  const answer = readlineSync.question(`Your answer: `)

  const isAnsTrue = isAnswerTrue(randNum, answer)

  return isAnsTrue
}

function isAnswerTrue(randNum, answer) {
  const isNumEven = randNum % 2 == 0
  const trueAnswer = isNumEven ? 'yes' : 'no'

  const isAnswerTrue = answer === trueAnswer

  console.log(
    isAnswerTrue
      ? 'Correct!'
      : `'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`,
  )

  return isAnswerTrue
}
