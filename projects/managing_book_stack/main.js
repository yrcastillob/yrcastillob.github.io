/*CREATE BASIC BOOK STACK TO ADD AND DELETE A BOOK*/

/******************************* VARIABLES *******************************/

/*BACK END VARIABLES*/
let messagesStack = [];
let bookStack = [];

/*HTML DOM ELEMENTS*/

let messageBoxHtml = document.getElementById("messagesBox");
let bookStackHtml = document.getElementById("booksStack");
let bookTitleHtml = document.getElementById("book_title");
let bookYearHtml = document.getElementById("book_year");
let bookEditorialHtml = document.getElementById("book_editorial");
let bookAuthorHtml = document.getElementById("book_author");
let buttonAddFirstHtml = document.getElementById("buttonAddFist");
let buttonAddLastHtml = document.getElementById("buttonAddLast");

/******************************* FUNCTIONS *******************************/
class Book{
    constructor( title, year, editorial, author ){
        this.title = title,
        this.year = year,
        this.editorial = editorial,
        this.author = author
    }

    getTitle ( ) {
        return this.title;
    }

    getYear ( ) {
        return this.year;
    }

    getEditorial ( ) {
        return this.editorial;
    }

    getAuthor ( ) {
        return this.author;
    }

    setTitle ( title ) {
        this.title = title;
    }

    setYear ( year ) {
        this.year = year;
    }

    setEditorial ( editorial ) {
        this.editorial = editorial;
    }

    setAuthor( author ) {
        this.author = author;
    }

}

// Manage Messages Function


function ManageMessages(message) {
    // We add the message to the messages stack
    messagesStack.unshift(message);

    // We clean the HTML messages item
    messageBoxHtml.innerHTML = "";

    // We iterate the messages stack and create and append one p element
    messagesStack.forEach(messageOfStack => {
        const individualMessage = document.createElement('p');
        individualMessage.classList.add(messageOfStack.class);
        individualMessage.innerHTML = `${messageOfStack.message}`;
        messageBoxHtml.appendChild(individualMessage);
    });

    setTimeout(function () {
        messagesStack.pop();
        messageBoxHtml.lastElementChild.remove()
    }, 3000);
}


// Delete Books Function

function deleteBook ( bookStack, type ) {
    let deletedBook;
    switch ( type ){
        case 1:
            deletedBook = bookStack.shift();
            break;
        case 2:
            deletedBook = bookStack.pop();
            break;
    }
    ManageMessages({message: `Book ${deletedBook.title} was deleted.`, class: `errorMessage`});
}

function deleteByIndex ( index ) {
    let bookToDelete = bookStack.splice( index, 1 );
    updateHtmlBookList()
    if (bookToDelete.length > 0) {
        ManageMessages({ message: `Book "${bookToDelete[0].title}" was deleted.`, class: `errorMessage` });
    } else {
        ManageMessages({ message: `No book found at index ${index}.`, class: `errorMessage` });
    }
}

// Add Books Function

function addBook ( title, year, editorial, author, selection ) {
    let bookToAdd = new Book(title,year,editorial,author);
    
    const isRepeatedTitle = bookStack.some(obj => obj.title === title);

    if ( isRepeatedTitle ) {
        ManageMessages({message: `Book ${bookToAdd.title} is already on list. Title cannot be repeated.`, class: `errorMessage`});
        return false;
    }

    if (title == '' || title == null || title == undefined ) {
        ManageMessages({message: `Book title cannot be empty`, class: `errorMessage`});
        return false;
    }

    switch ( selection ) {
        case 1:
            bookStack.unshift(bookToAdd);
            break;
        case 2:
            bookStack.push(bookToAdd);
            break;
    }
    updateHtmlBookList ()
    ManageMessages({message: `Book ${bookToAdd.title} was added.`, class: `successMessage`});
}

// Update book list HMLT

function updateHtmlBookList() {
    // We create one DOM element to avoid manipulating the DOM directly
    var fragment = document.createDocumentFragment();

    // We clean the HTML element
    bookStackHtml.innerHTML = "";

    // We iterate and create one row
    for (let index = 0; index < bookStack.length; index++) {
        var individualBook = document.createElement('tr');
        
        // Creation of cells td
        var cells = [
            document.createElement('td'),
            document.createElement('td'),
            document.createElement('td'),
            document.createElement('td'),
            document.createElement('td')
        ];

        cells[0].textContent = bookStack[index].title;
        cells[1].textContent = bookStack[index].year;
        cells[2].textContent = bookStack[index].editorial;
        cells[3].textContent = bookStack[index].author;

        // We add the icon
        var deleteIcon = document.createElement('i');
        deleteIcon.classList.add('material-icons');
        deleteIcon.textContent = 'delete';
        deleteIcon.addEventListener('click', deleteByIndex.bind(null, index));

        cells[4].appendChild(deleteIcon);

        cells.forEach(cell => individualBook.appendChild(cell));

        fragment.appendChild(individualBook);
    }

    bookStackHtml.appendChild(fragment);
}


buttonAddFirstHtml.addEventListener("click", function() {
    addBook(bookTitleHtml.value, bookYearHtml.value, bookEditorialHtml.value, bookAuthorHtml.value, 1);
});

buttonAddLastHtml.addEventListener("click", function() {
    addBook(bookTitleHtml.value, bookYearHtml.value, bookEditorialHtml.value, bookAuthorHtml.value, 2);
});
