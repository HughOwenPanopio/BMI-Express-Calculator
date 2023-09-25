const express = require('express');

//require body-parser
// const bodyParser = require("body-parser");

const app = express();

app.use(express.urlencoded({extended: true})); // the extended: true value, will allow us to post the nested objects. it can handle more complex data

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/bmi.html");
});
app.post("/", (req, res) => {
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);
    let result = weight / (height / 100);

    // res.send("The bmi is " + result);
        if (result < 18.5){
            res.send("The bmi is " + result + " Underweight");
        } else if (result < 25) {
            res.send("The bmi is " + result + " Normal");
        } else if (result < 30) {
            res.send("The bmi is " + result + " Overweight");
        } else {
            res.send("The bmi is " + result + " Obese");
        }

})

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
