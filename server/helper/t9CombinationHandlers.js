const fs = require("fs");
const t9Mapping = require("./t9Mapping");
const mostUsedEnglishWords = fs
    .readFileSync("./1-1000.txt", "utf-8")
    .split("\n");

const combinationsHandler = (...arrays) =>
    arrays.reduce((accumulator, lastInput) =>
        accumulator.flatMap((firstLetters) =>
            lastInput.map((lastLetter) => [firstLetters + lastLetter].flat())
        )
    );

const regex = /^[2-9]{1,8}$/;

module.exports = (input) => {
    if (!regex.test(input)) return;
    const numbers = input.split("");
    const stringsArray = numbers.map((num) => t9Mapping[num]);
    const combinations = combinationsHandler(...stringsArray);
    const words = combinations
        .map((comb) => mostUsedEnglishWords.filter((word) => word.includes(comb)))
        .filter((el) => el.length > 0);
    return {
        combinations,
        words,
    };
};