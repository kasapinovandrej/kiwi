const numbersToLetters = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
};

const combinationOfTwoNumbersHandler = (num1, num2) =>
    [].concat(...num1.map((letter1) => num2.map((letter2) => letter1 + letter2)));
const combinationsHandler = (a, b, ...c) =>
    b ? combinationsHandler(combinationOfTwoNumbersHandler(a, b), ...c) : a;

//////////////////////////////////////
//Server

const express = require('express')
const app = express()
const port = process.env.PORT || 4000

app.use(express.json())

app.post('/convert', (req, res) => {
    const inputValue = req.body.value
    const numbers = inputValue.split('')
    const stringsArray = []
    numbers.forEach(num => stringsArray.push(numbersToLetters[num]))
    res.status(200).send(combinationsHandler(...stringsArray))
})


app.listen(port, () => {
    console.log(`App running on port ${port}...`)
})

