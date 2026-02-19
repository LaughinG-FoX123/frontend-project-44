export default (name, func) => {
  let isAnswerTrue = true

  for (let i = 0; i < 3 && isAnswerTrue; i++) {
    isAnswerTrue = func()

    if (!(isAnswerTrue)) {
      console.log(`Let's try again, ${name}!`)
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
}
