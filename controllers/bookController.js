const db = require("../db");
const CustomNotFoundError = require('../errors/CustomNotFoundError');

async function getBookById(req, res) {
    const { bookId } = req.params;
    
    try {
        const book = await db.getBookById(Number(bookId));

        if (!book) {
            throw new CustomNotFoundError('Book not found');
        }

        res.send(`Book Name: ${book.name}`);
    } catch (error) {
        console.error('Error while retrieving book: ', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = { getBookById };
