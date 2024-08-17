import {db,getDocs,addDoc,collection} from "./firebase.js"
// const apiKey = "AIzaSyD8-P8BBk-LgP2idBzKcOE9Uv971FELCZA";
const apiKey = "AIzaSyAup3FWwOVgoELW6Z0hTwacpjBEMCdnHDo";
// ,setDoc,doc


const searchBtn = document.getElementById("search-btn")
const searchInput = document.getElementById("search-input")
const suggestionContainer = document.querySelector(".search-suggestion-container")


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
//Function for filling inputs of Book form
function displayResults(index){
    console.log(index);
    ;
    
    document.getElementById('book-title').value=index.volumeInfo.title
    document.getElementById('author-title').value = index.volumeInfo.authors ? [...index.volumeInfo.authors].join(", ") : ""
    document.getElementById('image-title').value=index.volumeInfo.imageLinks.thumbnail? index.volumeInfo.imageLinks.thumbnail:""
    document.getElementById('description').value=index.volumeInfo.description?index.volumeInfo.description:""
    document.getElementById('book-type').value=index.volumeInfo.categories?[...index.volumeInfo.categories].join(", "):""
    // document.getElementById('book_newrelease').checked=index.volumeInfo.publishedDate.slice(0,4)>=2020?true:false
}


// searchBtn.addEventListener("click", async ()=>{
//     const title = searchInput.value;
//     const url = `https://www.googleapis.com/books/v1/volumes?q=${title}&key=${apiKey}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//     console.log(data.items[0].volumeInfo.title);
//     displayResults(data)
    
// })

// const displayResults = (book) => {
//     document.getElementById('book-title').value = book.items[0].volumeInfo.title
//     document.getElementById('author-title').value = book.items[0].volumeInfo.authors
//     document.getElementById('image-title').value = book.items[0].volumeInfo.imageLinks.thumbnail
//     document.getElementById('description').value = book.items[0].volumeInfo.description
//     document.getElementById('book-type').value = book.items[0].volumeInfo.categories
// }
