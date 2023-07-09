function createLibrary(name) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
  return library
}

function addBook(library, book) {
  if (book.genre === "fantasy") {
    library.shelves.fantasy.push(book)
  } else if (book.genre === "nonFiction") {
    library.shelves.nonFiction.push(book)
  }
  return library
}



function checkoutBook(library, bookTitle, genre) {
  // console.log('LIBRARY', library)
  // console.log('BOOK', bookTitle)
  // console.log('GENRE', genre)
  // console.log("bOOks:", books)

  var bookFound = false
  for (let i = 0; i < library.shelves[genre].length; i++) {
    if (library.shelves[genre][i].title === bookTitle) {
      library.shelves[genre].splice(i, 1)
      bookFound = true
    }
  }
  // console.log(bookFound)
  if (bookFound === true) {
    return `You have now checked out ${bookTitle} from the ${library.name}.`
  } else {
    return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}.`
  }
}

function takeStock(library, genre) {
  if (!genre) {
    return `There are a total of ${Object.values(library.shelves).length} books at the ${library.name}.`
  } else {
    return `There are a total of ${library.shelves[genre].length} ${genre} books at the ${library.name}.`
  }
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};
