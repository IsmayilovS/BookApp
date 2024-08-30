import {db,getDocs,collection} from "./firebase.js"
// const apiKey = "AIzaSyD8-P8BBk-LgP2idBzKcOE9Uv971FELCZA";
const apiKey = "AIzaSyAup3FWwOVgoELW6Z0hTwacpjBEMCdnHDo";
// ,setDoc,doc

// Getting books from Admin Collections

const library = document.querySelector(".slider-content")

const fetchBooks = async () => {
    const books = await getDocs(collection(db, "books")) 
    // const new_books = document.querySelectorAll(".new-tag")
    // console.log(new_books);
    
    books.forEach(book => {
        // console.log(book.data());
        

        // console.log(book);
        console.log(book.data().publishDate.slice(0,4)>=2000);
        
        const ListItemBook = document.createElement("span")
        ListItemBook.innerHTML = `
                            <p class="new-tag hidden">New</p>
                    <img src="${book.data().imageLink}" alt="" srcset="">
                    <p id="slider-bookName">${book.data().title}</p>
                    <p id="slider-authorName">${book.data().author}</p>
                    <button>READ MORE</button>
        `
        // console.log(book.data());
        library.appendChild(ListItemBook)

        if(book.data().publishDate.slice(0,4)>=2000){
            document.querySelector(".new-tag").classList.remove("hidden")
        }
    });
}
 
fetchBooks()