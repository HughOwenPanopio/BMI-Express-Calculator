const express = require('express');

//require body-parser
// const bodyParser = require("body-parser");

const app = express();

app.use(express.urlencoded({extended: true})); // the extended: true value, will allow us to post the nested objects. it can handle more complex data

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
app.post("/", (req, res) => {
    let first_num = Number(req.body.first_num);
    let second_num = Number(req.body.second_num);
    let result = first_num + second_num;

    res.send("The sum is " + result);
})

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
