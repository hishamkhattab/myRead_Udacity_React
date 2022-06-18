import { Link } from "react-router-dom";

//components
import Header from "../../components/Header";
import Loading from "../../components/Loading/index.js";
import BookShelf from "../../components/BookShelf";

//style
import "./style.css";

const Homepage = ({booksList,load}) => {
    return (
        <div className="list-books">
            <Header />
            {load && <Loading />}
            {!load &&
                <div className="list-books-content">
                    <div>
                        <BookShelf
                            title="Currently Reading"
                            bookList={booksList.filter(book => book.shelf === "currentlyReading")}
                        />
                        <BookShelf
                            title="Want to Read"
                            bookList={booksList.filter(book => book.shelf === "wantToRead")}
                        />
                        <BookShelf
                            title="Read"
                            bookList={booksList.filter(book => book.shelf === "read")}
                        />
                    </div>
                </div>
            }
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    );
}
 
export default Homepage;