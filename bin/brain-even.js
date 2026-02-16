#!/usr/bin/env node
import helloAndGetName from '../src/cli.js'
import even from '../src/even.js'

const name = helloAndGetName()

console.log(`Answer "yes" if the number is even, otherwise answer "no".`)

even(name)
