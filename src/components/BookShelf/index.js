//components
import Book from "./../Book";

//style
import "./style.css";

const BookShelf = () => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    <li>
                        <Book />
                    </li>
                    <li>
                        <Book />
                    </li>
                    <li>
                        <Book />
                    </li>
                </ol>
            </div>
        </div>
    );
}
 
export default BookShelf;