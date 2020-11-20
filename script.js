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
addBooks("genghis khan and the making of the modern world", "jack wheatherford", 430)
addBooks("leningrad", "anna reid", 434)
addBooks("embers of war", "fredrik logvall", 120)
addBooks("rites of spring", "modris eksteins", 540)
addBooks("the history of the ancient world", "susan bauer", 652)

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

printBooks()

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
let titleValue = 'test';
submitButton.addEventListener('clicked', function(){
    titleValue = document.getElementById("unique-title").value;
    console.log(titleValue);
})