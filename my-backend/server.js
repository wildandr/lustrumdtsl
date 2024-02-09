const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5001;

const userRouter = require("./routes/users");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("Hello from the backend!");
});

app.use("/", userRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.export = app;
