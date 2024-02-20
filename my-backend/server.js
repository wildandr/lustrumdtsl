const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const port = 5001;

const userRouter = require("./routes/users");
const teamRouter = require("./routes/teams");
const cicRouter = require("./routes/cic");
const sbcRouter = require("./routes/sbc");
const fcecRouter = require("./routes/fcec");
const craftRouter = require("./routes/craft");

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("Hello from the backend!");
});

app.use("/", userRouter);
app.use("/", cicRouter);
app.use("/", teamRouter);
app.use("/", sbcRouter);
app.use("/", fcecRouter);
app.use("/", craftRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.export = app;
