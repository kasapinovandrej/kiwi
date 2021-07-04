const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const combinationsHandler = require("./helper/t9CombinationHandlers");

app.use(express.json());
app.post("/convert", (req, res) => {
    const inputValue = req.body.value;
    res.status(200).send(combinationsHandler(inputValue));
});

app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});

