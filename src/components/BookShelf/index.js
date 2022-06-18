//components
import Book from "./../Book";

//style
import "./style.css";

const BookShelf = ({title="",bookList = []}) => {
    return (
        <div className="bookshelf">
            {title !== "" && <h2 className="bookshelf-title">{title}</h2>}
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {bookList.map((book, idx) =>
                        <Book
                            key={idx}
                            book={book}
                        />
                    )}
                </ol>
            </div>
        </div>
    );
}
 
export default BookShelf;