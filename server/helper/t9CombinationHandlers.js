const fs = require("fs");
const t9Mapping = require("./t9Mapping");
const mostUsedEnglishWords = fs
    .readFileSync("./1-1000.txt", "utf-8")
    .split("\n");
const { cartesianProduct } = require('./cartesianProduct')
const regex = /^[2-9]{1,8}$/;

module.exports = (input) => {
    if (!regex.test(input)) throw new Error('Input must contains at least one number between 2-9, with maximum length of 8 characters');
    const numbers = input.split("");
    const stringsArray = numbers.map((num) => t9Mapping[num]);
    const combinations = cartesianProduct(...stringsArray);
    const words = combinations
        .map((comb) => mostUsedEnglishWords.filter((word) => word.includes(comb)))
        .filter((el) => el.length > 0).flat();
    return {
        combinations,
        words,
    };
};