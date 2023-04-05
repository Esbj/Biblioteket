'use strict';
let things
const main = document.querySelector("main")
console.log(main)

function printBooks() {
  main.innerHTML = ""
  fetch("http://localhost:3000/books")
    .then(res => res.json())
    .then(books => {
      const ul = document.createElement("ul")
      console.log(books)
      books.map(book => {
        const li = document.createElement("li")
        li.innerText = book.title
        li.addEventListener("click", () => printInfo(book.id))
        ul.appendChild(li)
      })
      main.appendChild(ul)
    })
}
printBooks()
function printInfo(id) {
  console.log(id)
  fetcher("books/" + id).then(data => console.log(data))
}



function fetcher(path){
  fetch("http://localhost:3000/" + path).then(response => response.json())
  .then(data => {
    // Do something with the data
    console.log(data);
    // Return the data
    return data;
  })
}