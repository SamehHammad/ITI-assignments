let opjsCounter = 0;

function Box(height, width, length, material) {
  this.height = height;
  this.width = width;
  this.length = length;
  this.material = material;
  this.contentOfBooks = [];
}

function Book(
  title,
  numofChapters,
  author,
  numofPages,
  publisher,
  numofCopies,
  opjsCounter
) {
  this.title = title;
  this.numofChapters = numofChapters;
  this.author = author;
  this.numofPages = numofPages;
  this.publisher = publisher;
  this.numofCopies = numofCopies;
  this.opjsCounter = opjsCounter;
}

Box.numberOfBook = 0;
Box.prototype.addbook = function (book) {
  book.opjsCounter = ++opjsCounter;
  for (let i = 0; i < book.numofCopies; i++) {
    // fix: use book.numofCopies instead of Book.numofCopies
    this.contentOfBooks.push(book);
  }
  Box.numberOfBook++;
  console.log(`The book has been added successfully.`);
  box.countOfCreatedBooks();
  console.log(`the number of book objects =  ${opjsCounter}`); // fix: use opjsCounter instead of box.countOfCreatedBooks()
};

Box.prototype.deleteBook = function (title) {
  let found = false;
  for (let i = 0; i < this.contentOfBooks.length; i++) {
    if (this.contentOfBooks[i].title === title) {
      found = true;
      if (this.contentOfBooks[i].numofCopies !== 1) {
        this.contentOfBooks[i].numofCopies--;
        console.log(
          `the number of copies after deleting is ${this.contentOfBooks[i].numofCopies}`
        );
      } else {
        this.contentOfBooks.splice(i, 1);
        console.log("it was the last copy in the box");
      }
      break;
    }
  }
  if (!found) {
    console.log("the book is not existed");
  }
};

Box.prototype.countOfCreatedBooks = function () {
  console.log(`the number of books in box are: ${this.contentOfBooks.length}`);
  return this.contentOfBooks.length;
};

let box = new Box(80, 100, 30, "wood");
let book1 = new Book(
  "Zykola land",
  5,
  "Amr Abdelhameed",
  500,
  "dar el nasgr",
  4
);
let book2 = new Book("Amarita", 5, "Amr Abdelhameed", 1500, "dar el nasgr", 5);
let book3 = new Book(
  "the white nights",
  1,
  "Dostoyevsky",
  100,
  "dar el nasgr",
  1
);
box.countOfCreatedBooks(); //3

box.addbook(book1);

box.addbook(book2);

box.addbook(book3);

box.deleteBook("Zykola land"); //4 =>3

box.deleteBook("the white nights"); //delete object

box.deleteBook("sssssssss"); //not existed
