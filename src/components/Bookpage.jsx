import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react"
import { useNavigate, Link } from 'react-router-dom';

function BookPage(props)
{
    const params = useParams()
    let navigate = useNavigate();

    const bookId = params.id;

    let [ book, setBook ] = useState({});
    let apiUrl = `https://jsonbookapi1.herokuapp.com/api/books/${bookId}`;

    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(res => setBook(res))
    }, [params.id])

    const deleteBook = async () => {
        const response = await fetch(apiUrl, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        }).then(() => {
            props.setToggle(prev => !prev)
            navigate("/");
        });

        console.log(response);
    }

    return (
        <div class="book-page">
            <div>
                <h2>{book.Title}</h2>
                <img src={book.Cover} alt={book.Title}/>
                <h3>Author: <span class="author">{book.Author}</span></h3>
            </div>
            <div class="page-book-details">
                <div>
                    <h3>Book Description</h3>
                    <p>{book.Description}</p>
                    <button class="page-button"><a href={book.NYPL_Link}>View More Details</a></button>
                    <button class="page-button"><a href={book.linkToBuy}>Buy Now</a></button>
                </div>
                <div>
                    <button class="page-button" onClick={deleteBook}>Delete Book</button>
                    <button class="page-button">Edit Book</button>
                </div>
            </div>
        </div>    
    );
}

export default BookPage;
