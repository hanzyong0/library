const table = document.querySelector('table');
const newBook = document.querySelector('#newBook');
const form = document.querySelector('.form-popup');
const closeForm = document.querySelector('#close');
const submit = document.querySelector('#submit');

let myLibrary = [];

// Constructor function to create book object
function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`;
    };
}

// Add book objects to myLibrary array
function addBookToLibrary() {
    title = document.querySelector('#title').value;
    author = document.querySelector('#author').value;
    pages = document.querySelector('#pages').value;
    status = document.querySelector('#status').value;
    const book = new Book(title, author, pages, status);
    myLibrary.push(book);
}

// Display books by creating elements
function displayBook() {
    let currentBook = myLibrary[myLibrary.length - 1];
    const row = document.createElement('tr');
    const title = document.createElement('td');
    title.textContent = currentBook.title;
    row.appendChild(title);
    const author = document.createElement('td');
    author.textContent = currentBook.author;
    row.appendChild(author);
    const pages = document.createElement('td');
    pages.textContent = currentBook.pages;
    row.appendChild(pages);
    const status = document.createElement('td');
    status.textContent = currentBook.status;
    row.appendChild(status);

    table.appendChild(row);
}

// Button to add new book
newBook.addEventListener('click', () => {
    form.style.display = 'block'
});

// Button to close popup form
closeForm.addEventListener('click', () => {
    form.style.display = 'none';
});

// Button to store book object into myLibrary
submit.addEventListener('click', () => {
    addBookToLibrary();
    displayBook();
    closeForm.click();
    document.querySelector('.form-container').reset()
});