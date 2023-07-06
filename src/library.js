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

function addBook() {

}

module.exports = {
  createLibrary,
  addBook,
  // checkoutBook,
  // takeStock
};