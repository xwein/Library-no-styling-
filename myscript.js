
//  2 functions to make visible the book-input form with 
// background overlay

const form = document.getElementById('book-form')
const addBook = document.getElementById('add-book-btn')

function openForm() {
    form.style.display = "inline-block"
    var overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    overlay.style.zIndex = "1";
    overlay.setAttribute("id", "overlay");
    document.body.appendChild(overlay);
}

function closeForm() {
    form.style.display = "none";
    var overlay = document.getElementById("overlay");
    if (overlay) {
        overlay.parentNode.removeChild(overlay);
    }
    document.body.style.backgroundColor = "white";
}

let myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

const bookForm = document.querySelector('#book-form');
const addNewBook = document.getElementById('add-new-book');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');

bookForm.addEventListener('submit', function (event) {
    event.preventDefault();
    myLibrary.push(new Book(title.value, author.value, pages.value));
    console.log(myLibrary);
    createBookDivs()
    closeForm()
});

const libraryDisplay = document.getElementById('grid-container');
const checkBox = document.getElementById('read');

    // Function to create a div element for each book in the library
    function createBookDivs() {

        for (let i = 0; i < myLibrary.length; i++) {
            // Check if a div for this book already exists

            let bookDiv = document.getElementById('book-' + i);

            if (!bookDiv) {
                // Create a new div for the book
                bookDiv = document.createElement('div');
                bookDiv.id = 'book-' + i;
                bookDiv.classList.add('book-style');

                // Add an h2 element with the book title
                let titleElement = document.createElement('h2');
                titleElement.innerText = 'Title: ' + myLibrary[i].title;
                bookDiv.appendChild(titleElement);

                let authorElement = document.createElement('p');
                authorElement.innerText ='Author: ' + myLibrary[i].author;
                bookDiv.appendChild(authorElement);

                let pagesElement = document.createElement('p');
                pagesElement.innerText = 'Pages: ' + myLibrary[i].pages;
                bookDiv.appendChild(pagesElement);

                let buttonFlex = document.createElement('div');
                buttonFlex.classList.add('button-style');
                bookDiv.appendChild(buttonFlex);

                let readButton = document.createElement('button');
                if(checkBox.checked){
                readButton.innerText = "Read";}
                else{
                    readButton.innerText = "Not read"
                }
                buttonFlex.appendChild(readButton);
                readButton.onclick = function() {
                    if(readButton.innerText === "Read"){
                    readButton.innerText = "Not read";
                    readButton.style.backgroundColor='red';}
                    else{
                        readButton.innerText = "Read";
                        readButton.style.backgroundColor='green'
                    }
                  };
                let removeButton = document.createElement('button');
                removeButton.innerText = "Remove";
                buttonFlex.appendChild(removeButton);
                removeButton.onclick = function(){
                    bookDiv.remove()
                    myLibrary.splice(i,1);
                    console.log(myLibrary)
                }

                // Add the new div to the library container
                libraryDisplay.appendChild(bookDiv);
            }
        }
    }





