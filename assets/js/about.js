import {db, getDocs, collection } from "./firebase.js"

const library = document.querySelector(".tbody-books")

const fetchBooks = async () => {
    const books = await getDocs(collection(db, "books")) 
    books.forEach(book => {
        // console.log(book);
        const ListItemBook = document.createElement("tr")
        ListItemBook.classList.add("tbody-tr")
        for (let b=1; b < 10; b++){
        ListItemBook.innerHTML = `
                            <td></td>
                            <td class="book-table-img-td" id="book-table-img-td"><img
                                    src=${book.data().imageLink}
                                    alt="" srcset="" id="book-table-img">
                                <p>${book.data().title}</p>
                            </td>
                            <td class="es4-td" id="es4-td">
                                <p>${book.data().description}</p>
                            </td>
                            <td>${book.data().bookType}</td>
                            <td>${book.data().author}</td>


        `
        // console.log(book.data());
        library.appendChild(ListItemBook)
    }
    });
}
 
fetchBooks()