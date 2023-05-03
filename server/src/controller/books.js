import Books from "../model/books.js";
import Comments from "../model/comments.js";


export const newBook = async (req, res) => {

    try {

        const { title, description, price, location } = req.body;

        const newBooks = new Books(

            {
                title: title,
                description: description,
                price: price,
                location: location,
            }

        )

        await newBooks.save()

        res.status(201).json(newBooks);


    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

export const getBooks = async (req, res) => {

    try {
        const book = await Books.find({});
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


export const getSingleBook = async (req, res) => {

    try {
        const { id } = req.params;
        console.log(id)
        const book = await Books.findById(id);
        res.status(200).json(book)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}

export const updateBook = async (req, res) => {

    try {
        const { id } = req.params;
        const { title, description, price, location } = req.body;
        const books = await Books.findByIdAndUpdate(
            id,
            {
                title, description, price, location
            },
            { new: true })

        res.status(200).json(books)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


export const deleteBook = async (req, res) => {

    try {

        const { id } = req.params;
        await Books.findByIdAndDelete(id);
        const book = await Books.find();
        res.status(200).json(book);

    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}

export const addComment = async (req, res) => {

    try {

        const { id } = req.params;
        const { comment } = req.body;
        const book = await Books.findById(id);
        const review = new Comments({
            comments: comment
        });
        book.comments.push(review);
        await review.save();
        await book.save();
        res.status(200).json(review)

    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}