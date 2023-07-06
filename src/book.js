function createTitle(title) {
  return "The " + title
}

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns
  }
  return character
}

function saveReview(title, reviews) {
  if (reviews.includes(title)) {
    return reviews
  } else {
     reviews.push(title)
     return reviews
  }
}

function calculatePageCount(bookTitle) {
return bookTitle.length * 20
}

function writeBook(bookTitle, bookCharacter, genre) {
var book = {
  title: bookTitle,
  mainCharacter: bookCharacter,
  pageCount: calculatePageCount(bookTitle),
  genre: genre
}
return book
}

function editBook(book) {
  return book.pageCount *= .75
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}