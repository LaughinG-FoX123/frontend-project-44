#!/usr/bin/env node
import getName from '../src/cli.js'
import even from '../src/even.js'

console.log(`Welcome to the Brain Games!`)

const name = getName()
console.log(`Hello, ${name}!`)

console.log(`Answer "yes" if the number is even, otherwise answer "no".`)

even(name)
