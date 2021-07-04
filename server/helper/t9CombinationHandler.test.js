const combinationHandler = require('./t9CombinationHandlers')
const { expect } = require('@jest/globals')

const regexError = 'Input must contains at least one number between 2-9, with maximum length of 8 characters'

test('empty input triggers regex validation error', () => {
    expect(() => {
        combinationHandler('')
    }).toThrowError(regexError)
})
test('expected valid results', () => {
    expect(combinationHandler('23').combinations.toString())
        .toBe(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'].toString())
})
test('input contains invalid character', () => {
    expect(() => {
        combinationHandler('a347')
    }).toThrowError(regexError)
})
test('input contains invalid number character', () => {
    expect(() => {
        combinationHandler('123')
    }).toThrowError(regexError)
})
test('input exceeds maximum number of characters', () => {
    expect(() => {
        combinationHandler('234567892')
    }).toThrowError(regexError)
})
