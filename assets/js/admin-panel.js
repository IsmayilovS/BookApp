import {db,getDocs,addDoc,collection, doc} from "./firebase.js"
// const apiKey = "AIzaSyD8-P8BBk-LgP2idBzKcOE9Uv971FELCZA";
const apiKey = "AIzaSyAup3FWwOVgoELW6Z0hTwacpjBEMCdnHDo";
// ,setDoc,doc


const searchBtn = document.getElementById("search-btn")
const searchInput = document.getElementById("search-input")
const suggestionContainer = document.querySelector(".search-suggestion-container")
const bookForm = document.getElementById("book-form")



searchBtn.addEventListener('click',()=>book_search(searchInput.value.trim()))
searchInput.addEventListener('keydown',(e)=>{
    if(e.key=="Enter"){
        book_search(searchInput.value.trim())
    }
})

async function book_search(title) {
    // suggestionContainer.innerHTML=""
    try {
        const response=await fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}&maxResults=40&key=${apiKey}`)
        const data=await response.json()
        // console.log(data);
        for(let i of data.items){
            const ListItem = document.createElement('div')
            ListItem.classList.add("search-suggestion-container-content");
            ListItem.innerHTML=`<i class="bi bi-clock-history"></i>
                            <p>${i.volumeInfo.title}</p>`;
            suggestionContainer.appendChild(ListItem)
            ListItem.addEventListener('click',()=>displayResults(i))
        }

        
    } catch (error) {
        console.log(error);
        
    }
}
// ++++++++++++     Function for filling inputs of Book form    ++++++++++++
function displayResults(index){
    // console.log(index);
    ;
    
    document.getElementById('book-title').value = index.volumeInfo.title
    document.getElementById('author-title').value = index.volumeInfo.authors ? [...index.volumeInfo.authors].join(", ") : ""
    document.getElementById('image-title').value = index.volumeInfo.imageLinks.thumbnail? index.volumeInfo.imageLinks.thumbnail:""
    document.getElementById('description').value = index.volumeInfo.description?index.volumeInfo.description:""
    document.getElementById('book-type').value = index.volumeInfo.categories?[...index.volumeInfo.categories].join(", "):""

    // document.getElementById('book_newrelease').checked=index.volumeInfo.publishedDate.slice(0,4)>=2020?true:false
}
// Adding to Firebase Collection
bookForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const title = document.getElementById('book-title').value
    const author = document.getElementById('author-title').value
    const publishDate = "document.getElementById('publishDate').value"
    const description = document.getElementById('description').value
    const imageLink = document.getElementById('image-title').value
    const bookType = document.getElementById('book-type').value
    
   try {
    const docRef = await addDoc(collection(db, "books"), {
        title,
        author,
        publishDate,
        description,
        imageLink,
        bookType

    });
    console.log("Document written with ID: ", docRef.id);
    } catch (e) {
    console.error("Error adding document: ", e);
    }
    bookForm.reset()
})


// Getting books from Admin Collections

const library = document.querySelector(".tbody-books")

const fetchBooks = async () => {
    const books = await getDocs(collection(db, "books")) 
    books.forEach(book => {
        // console.log(book);
        const ListItemBook = document.createElement("tr")
        ListItemBook.classList.add("tbody-tr")
        for (let b=1; b < 10; b++){
        ListItemBook.innerHTML = `
                            <td>#</td>
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

