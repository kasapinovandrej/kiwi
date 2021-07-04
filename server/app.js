const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const combinationsHandler = require("./helper/t9CombinationHandlers");

app.use(express.json());
app.post("/convert", (req, res) => {
    try {
        return res.status(200).send(combinationsHandler(req.body.value))
    } catch (err) {
        return res.status(400).send(err.message)
    }
});

app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});

