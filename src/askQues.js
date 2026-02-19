import readlineSync from 'readline-sync'

export default () => {
    return readlineSync.question(`Your answer: `)
}