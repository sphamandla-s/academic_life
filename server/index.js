import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./src/routes/books.js";
const app = express();
const port = 5001;


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));


app.use('/books', routes)


// Connect to the mango database and start the server
mongoose.connect('mongodb://localhost:27017/books-academy').then(() => {
    app.listen(port, () => {
        console.log(`Listening to port ${port}`)
    })
}).catch(err => {
    console.log("There was an error")
    console.log(err)
});