import Book from "./Book.jsx";

function BookContainer(props)
{
    return (
        <div class="books-container">
            {props.data.map(book => {
                return <Book imageUrl={book.Cover} title={book.Title} author={book.Author}/>
            })}
        </div>
    );
}

export default BookContainer;
