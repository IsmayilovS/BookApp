const apiKey = "AIzaSyD8-P8BBk-LgP2idBzKcOE9Uv971FELCZA";

const book = async () => {
    // const url = `https://www.googleapis.com/books/v1/volumes?q=${title}&key=${apiKey}`;
    const url = `https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

book()