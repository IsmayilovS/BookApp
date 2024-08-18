import {db,getDocs,collection} from "./firebase.js"
// const apiKey = "AIzaSyD8-P8BBk-LgP2idBzKcOE9Uv971FELCZA";
const apiKey = "AIzaSyAup3FWwOVgoELW6Z0hTwacpjBEMCdnHDo";
// ,setDoc,doc

// Getting books from Admin Collections

const library = document.querySelector(".slider-content")

const fetchBooks = async () => {
    const books = await getDocs(collection(db, "books")) 
    books.forEach(book => {
        // console.log(book);
        const ListItemBook = document.createElement("span")
        ListItemBook.innerHTML = `
                            <p class="new-tag hidden">New</p>
                    <img src="${book.data().imageLink}" alt="" srcset="">
                    <p id="slider-bookName">${book.data().title}</p>
                    <p id="slider-authorName">${book.data().author}</p>
                    <button>READ MORE</button>
        `
        // if(book.data().publishDate.slice(0,4)>=2000){
        //     document.getElementsByClassName("new-tag").classList.remove("hidden")
        // }
        // console.log(book.data());
        library.appendChild(ListItemBook)
    });
}
 
fetchBooks()