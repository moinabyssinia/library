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
addBooks("More Myself: A Journey", "Alicia Keys", 272)
addBooks("Martin Luther King", "Godfrey Hodgson", 280)
addBooks("Holy Bible", "God", 1147)
addBooks("The Narrative of the Life of Frederick Douglass, an American Slave", "Frederick Douglass", 160)
addBooks("You Have a Brain: A Teen's Guide to T.H.I.N.K. B.I.G.", "Ben Carson", 240)

//function to loop through array and display
// const printBooks = function(){
//     myLibrary.forEach(function(element){
//         // create new p element
//         const newp = document.createElement("p");
//         // give it some content
//         const newContent = document.createTextNode(element.name);
//         // add the text node to the newly created p
//         newp.appendChild(newContent);
//         // add newly created element and its content into DOM
//         document.getElementById("myBooks").appendChild(newp)
//     })
// }

const printBooks = function(){
    myLibrary.forEach(function(element){
        // get a reference to the table
        let tableRef = document.getElementById("myBooks");
        // insert row at the end of the table
        let newRow = tableRef.insertRow(-1);
        // insert a cell in the row at index 0
        let newCell = newRow.insertCell(0);
        // append a text node to the cell
        let newText = document.createTextNode(element.name);
        newCell.appendChild(newText);
    })
}

printBooks();

// add table border
const element = document.getElementsByTagName('td');
for (let item of element){
    // console.log(item);
    // item.style.border = '1px solid #999';
    // item.style.padding = '0.5rem';
    item.classList.toggle('tableStyle');
}

//uncollapse form
const form = document.getElementById("new-book");
const adder = document.querySelectorAll("button");
adder[0].addEventListener("click", function(){
    console.log("clicked");
    form.style.display = "block";
})

//get new books from users
const submitButton = document.getElementById("submit-it");
submitButton.addEventListener('click', function(){
    const titleField = document.getElementById("unique-title").value;
    const authorField = document.getElementById("authorField").value;
    const pagesField = document.getElementById("num-pages").value;
    //push new data to array
    addBooks(titleField, authorField, pagesField);
    //delete existing DOM 
    const dom = document.getElementsByTagName("tbody");
    dom[0].remove();
    //print table after pushing new data
    printBooks();
})