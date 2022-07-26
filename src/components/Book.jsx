import { Link } from 'react-router-dom';

function Book(props)
{
    return (
        <div class="book-item">
            <Link to={`/books/${props.book._id}`}>
                <img src={props.book.Cover} alt={props.book.Title}/>
                <div class="book-description">
                    <h4>{props.book.Title}</h4>
                    <p>
                        By: {props.book.Author}
                    </p>
                </div>
            </Link>
        </div>
    );
}

export default Book;
