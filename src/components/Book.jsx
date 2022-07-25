function Book(props)
{
    return (
        <div>
            <div>
                <h4>{props.title}</h4>
                <p>
                    By: {props.author}
                </p>
            </div>
        </div>
    );
}

export default Book;
