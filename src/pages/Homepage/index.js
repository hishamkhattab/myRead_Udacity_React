import { Link } from "react-router-dom";

//components
import Header from "../../components/Header";
import BookShelf from "../../components/BookShelf";

//style
import "./style.css";

const Homepage = () => {
    return (
        <div className="list-books">
            <Header/>
            <div className="list-books-content">
                <div>
                    <BookShelf/>
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    );
}
 
export default Homepage;