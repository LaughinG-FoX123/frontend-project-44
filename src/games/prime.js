import generateRandNum from '../generateRandNum.js'
import checkAnswer from '../checkAnswer.js'
import askThreeQues from '../askThreeQues.js'
import askQues from '../askQues.js'

export default (name) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

  askThreeQues(name, askQuestion)
}

function askQuestion() {
  const num = generateRandNum(0, 1001)

  console.log(`Question: ${num}`)
  
  const userAnswer = askQues()
  const trueAnswer = isPrime(num)?'yes':'no'

  const isAnswerTrue = checkAnswer(userAnswer, trueAnswer)
  return isAnswerTrue
}

function isPrime(num) {
  if (num < 2)
    return false

  if (num == 2)
    return true

  if (num % 2 == 0) 
    return false

  for(let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i == 0)
        return false
  }

  return true
}
