import express from 'express';
import {addComment, deleteBook, getBooks, getSingleBook, newBook, updateBook} from '../controller/books.js'
const routes = express.Router();


routes.get('/', getBooks);
routes.post('/new', newBook);
routes.get('/:id', getSingleBook);
routes.put('/:id/update', updateBook);
routes.delete('/:id/delete', deleteBook);
routes.post('/:id/comment', addComment);



export default routes;