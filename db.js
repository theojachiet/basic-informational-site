const authors = [
    { id: 1, name: "Bryan" },
    { id: 2, name: "Christian" },
    { id: 3, name: "Jason" },
];

const books = [
    { id: 1, name: "The left hand of darkness" },
    { id: 2, name: "The disposessed" },
    { id: 3, name: "Tobi Lolness" },
]

async function getAuthorById(authorId) {
    return authors.find(author => author.id === authorId);
};

async function getBookById(BookId) {
    return books.find(book => book.id === bookId);
};

module.exports = { getAuthorById, getBookById };