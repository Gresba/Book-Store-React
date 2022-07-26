import { Link } from 'react-router-dom';

function Book(props)
{
    return (
        <div class="book-item">
            <Link to="/about">
                <img src={props.imageUrl}/>
                <div class="book-description">
                    <h4>{props.title}</h4>
                    <p>
                        By: {props.author}
                    </p>
                </div>
            </Link>
        </div>
    );
}

export default Book;
