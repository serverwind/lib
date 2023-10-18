const form = {
  author: document.getElementById("author"),
  book: document.getElementById("book"),
  status: document.getElementById("status"),
  submit: document.getElementById("submit-button"),
};

form.submit.addEventListener("click", addBookToLibrary);

function Book(name, book, status) {
  this.name = name;
  this.book = book;
  this.status = status;
}

Book.prototype.divMaker = function () {
  const el = {
    list: document.querySelector(".lib"),
    name: document.createElement("span"),
    book: document.createElement("span"),
    status: document.createElement("span"),
    newDiv: document.createElement("div"),
    remover: document.createElement("button"),
  };

  el.list.appendChild(el.newDiv);
  el.name.innerHTML = this.name;
  el.newDiv.appendChild(el.name);
  el.book.innerHTML = this.book;
  el.newDiv.appendChild(el.book);
  el.status.innerHTML = this.status;
  el.newDiv.appendChild(el.status);
  el.remover.innerHTML = "Remove";
  el.newDiv.appendChild(el.remover);

  el.remover.addEventListener("click", removeBook);

  function removeBook() {
    el.newDiv.remove();
  }
};

function addBookToLibrary() {
  const input = new Book(form.author.value, form.book.value, form.status.value);
  input.divMaker();
}
