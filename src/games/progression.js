import generateRandNum from '../generateRandNum.js'
import checkAnswer from '../checkAnswer.js'
import askThreeQues from '../askThreeQues.js'
import askQues from '../askQues.js'

export default (name) => {
  console.log('What number is missing in the progression?')

  askThreeQues(name, askQuestion)
}


function askQuestion() {
  const progression = genProgression()
  const indexOfMisedNum = generateRandNum(0, 10)
  const trueAnswer = progression[indexOfMisedNum]
  
  progression[indexOfMisedNum] = '..'

  let stringProression = ``
  
  for(const elm of progression) {
    stringProression = stringProression + ` ${elm}`
  }

  console.log(`Question:${stringProression}`)

  const userAnswer = askQues()
  

  const isAnswerTrue = checkAnswer(userAnswer, trueAnswer)
  return isAnswerTrue
}

function genProgression() {
    const result = []

    const step = generateRandNum(0, 6)
    const start = generateRandNum(0, 11)

    for(let i = 0; i<10; i++) {
        let currentElement = start + i * step
        result.push(currentElement)
    }

    return result
}
