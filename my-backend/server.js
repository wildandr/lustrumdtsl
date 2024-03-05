const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const https = require("https");
const cors = require("cors");

const app = express();
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

app.use("/endpoint", userRouter);
app.use("/endpoint", cicRouter);
app.use("/endpoint", teamRouter);
app.use("/endpoint", sbcRouter);
app.use("/endpoint", fcecRouter);
app.use("/endpoint", craftRouter);

// Konfigurasi opsi untuk sertifikat SSL
const options = {
    key: fs.readFileSync("/home/wildandzakyramadhani/www.lustrumkmtsl.com.key"),
    cert: fs.readFileSync("/home/wildandzakyramadhani/sectigo_lustrumkmtsl.com_crt.txt")
};

// Buat server HTTPS
const server = https.createServer(options, app);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
