const main = require('../hello.js')

it('Should add two numbers', () => {
  expect(main.add(1, 4)).toBe(5)
})