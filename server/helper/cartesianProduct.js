exports.cartesianProduct = (...arrays) =>
    arrays
        .reduce((accumulator, lastInput) =>
            accumulator.flatMap((firstLetters) =>
                lastInput.map((lastLetter) => [firstLetters + lastLetter].flat())
            )
        )
        .flat();