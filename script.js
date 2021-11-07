const table = document.querySelector('table');
const newBook = document.querySelector('#newBook');
const form = document.querySelector('.form-popup');
const closeForm = document.querySelector('#close');
const submit = document.querySelector('#submit');
const tbody = document.querySelector('tbody');

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
// Get arguments from popup form
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
    while (tbody.hasChildNodes()) {
        tbody.removeChild(tbody.lastChild);
    };
    for (let i = 0; i < myLibrary.length; i++) {
        const row = document.createElement('tr');

        const title = document.createElement('td');
        title.textContent = myLibrary[i].title;
        row.appendChild(title);

        const author = document.createElement('td');
        author.textContent = myLibrary[i].author;
        row.appendChild(author);

        const pages = document.createElement('td');
        pages.textContent = myLibrary[i].pages;
        row.appendChild(pages);

        const status = document.createElement('td');
        if (myLibrary[i].status == 'read') {
            status.textContent = 'Read';
        } else {
            status.textContent = 'Not Read';
        };
        row.appendChild(status);

        const change = document.createElement('td');
        const changeBtn = document.createElement('button');
        changeBtn.setAttribute('type', 'button');
        changeBtn.dataset.index = i;
        changeBtn.textContent = 'Change Status';
        changeBtn.addEventListener('click', (e) => {
            if (myLibrary[e.target.dataset.index].status == 'read') {
                myLibrary[e.target.dataset.index].status = 'not-read';
                displayBook();
            } else {
                myLibrary[e.target.dataset.index].status = 'read';
                displayBook();
            };
        });
        change.appendChild(changeBtn);
        row.appendChild(change);

        const remove = document.createElement('td');
        const removeBtn = document.createElement('button');
        removeBtn.setAttribute('type', 'button');
        removeBtn.dataset.index = i;
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', (e) => {
            myLibrary.splice(e.target.dataset.index, 1);
            displayBook();
        })
        remove.appendChild(removeBtn);
        row.appendChild(remove);

        tbody.appendChild(row);
    };
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



