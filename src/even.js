import askQuestion from "./askQuestion.js";

export default (name) => {
    for(let i = 0; i < 3; i++){
        const isAnswerTrue = askQuestion()

        if(isAnswerTrue) {
            console.log(`Correct!`)
        } else {
            console.log(`It's a wrong answer
Let's try again, ${name}!`)
            return
        }
    }
    console.log(`Congratulations, ${name}!`)
}