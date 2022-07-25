import Book from "./Book.jsx";

function BookContainer(props)
{
    return (
        <div>
            {props.data.map(book => {
                return <Book title={book.Title} author={book.Author}/>
            })}
        </div>
    );
}

export default BookContainer;
