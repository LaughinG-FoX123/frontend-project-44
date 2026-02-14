import askQuestion from './askQuestion.js'

export default (name) => {
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
