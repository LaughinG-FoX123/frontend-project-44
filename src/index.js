import helloAndGetName from '../src/cli.js'
import even from './games/even.js'
import calc from './games/calc.js'
import gcd from './games/gcd.js'

export default (game) => {
  const name = helloAndGetName()

  switch (game) {
    case 'even':
      even(name)
      break

    case 'calc':
      calc(name)
      break

    case 'gcd':
      gcd(name)
      break

    case 'games':
      return
  }
}
