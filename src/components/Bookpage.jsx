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
        <div>
            <h2>{book._id}</h2>
        </div>    
    );
}

export default BookPage;
