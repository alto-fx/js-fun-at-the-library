function shelfBook(book, shelf) {
  if (shelf.length <= 2) {
    shelf.unshift(book)
    return book
  }
}

function unshelfBook(book, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === book) {
      shelf.splice(i, 1)
    }
  }
  return shelf
}

function listTitles(shelf) {
  var titles = []
  for (var i = 0; i < shelf.length; i++) {
    titles.push(shelf[i].title)
  }
  return titles.join(", ")
}

// add spaces and comma back into string elements using a string method.

function searchShelf(shelf, book) {
  console.log("SHELF:", shelf)
  console.log("BOOK:", book)
  // need for loop to step through shelf array.
  // need a conditional to check if shelf includes() book
  // might need to declare a new variable that is assigned a boolean?
  var isOnShelf;
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title.includes(book)) {
      isOnShelf = true
    } else isOnShelf = false
  }
  return isOnShelf
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};