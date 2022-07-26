import Book from "./Book.jsx";

function BookContainer(props)
{
    return (
        <div class="books-container">
            {props.data.map(book => {
                return <Book book={book}/> 
            })}
        </div>
    );
}

export default BookContainer;
