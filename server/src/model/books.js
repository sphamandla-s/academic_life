import mongoose from "mongoose";

const BooksSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: String,
    location: String,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comments'
        }
    ]
});

const Books = mongoose.model('Books', BooksSchema);

export default Books;

