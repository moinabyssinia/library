let books = [];

//constructor for book objects
function Book(name, author, pages){
    this.name = name
    this.author = author
    this.pages = pages
}

//function to add book objects to the array
const addBooks = function(name, author, pages){
    let newBook = new Book(name, author, pages);
    books.push(newBook);
}

//function to loop through array and display
