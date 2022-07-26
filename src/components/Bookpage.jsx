import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react"

function BookPage(props)
{
    const params = useParams()

    let [ book, setBook ] = useState({});

    useEffect(() => {
        fetch(`https://jsonbookapi1.herokuapp.com/api/books/${params.id}`)
            .then(res => res.json())
            .then(res => setBook(res))
    }, [])

    return (
        <div class="book-page">
            <div>
                <h2>{book.Title}</h2>
                <img src={book.Cover}/>
                <h3>Author: <span class="author">{book.Author}</span></h3>
            </div>
            <div class="page-book-details">
                <h3>Book Description</h3>
                <p>{book.Description}</p>
                <button class="page-button"><a href={book.NYPL_Link}>View More Details</a></button>
                <button class="page-button"><a href={book.linkToBuy}>Buy Now</a></button>
            </div>
        </div>    
    );
}

export default BookPage;
