const book = async (title) => {
    // const url = `https://www.googleapis.com/books/v1/volumes?q=${title}&key=${apiKey}`;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${title}=free-ebooks&key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    console.log(data.items[0].volumeInfo.title);    
    
}
book("Harry Potter")