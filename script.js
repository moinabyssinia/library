let myLibrary = [];

//constructor for book objects
function Book(name, author, pages){
    this.name = name
    this.author = author
    this.pages = pages
}

//function to add book objects to the array
const addBooks = function(name, author, pages){
    let newBook = new Book(name, author, pages);
    myLibrary.push(newBook);
}

// manually add to library
addBooks("grant", "ron chernow", 289)
addBooks("guns, germs, and steel", "jared diamond", 332)
addBooks("genghis khan and the making of the moder world", "jack wheatherford", 430)
addBooks("leningrad", "anna reid", 434)
addBooks("embers of war", "fredrik logvall", 120)
addBooks("rites of spring", "modris eksteins", 540)
addBooks("the history of the ancient world", "susan bauer", 652)

//function to loop through array and display
const printBooks = function(){
    myLibrary.forEach(function(element){
        // create new p element
        const newp = document.createElement("p");
        // give it some content
        const newContent = document.createTextNode(element.name);
        // add the text node to the newly created p
        newp.appendChild(newContent);
        // add newly created element and its content into DOM
        document.getElementById("myBooks").appendChild(newp)
    })
}

printBooks()