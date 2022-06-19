import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

//components
import Header from "./../../components/Header";
import Loading from "./../../components/Loading";

//reducers
import { getSingleBook, updateBook } from "../../store/bookSlice";

//style
import "./style.css";


const BookDetailspage = () => {

    const {isLoading, bookData} = useSelector(state => state.books);
    const dispatch = useDispatch();

    const { bookId } = useParams();
    const [bookState, setBookState] = useState("");


    const handleSelect = (book, shelf) => {
        setBookState(shelf)
        dispatch(updateBook({ book, shelf }))
    }

    useEffect(() => {
        dispatch(getSingleBook(bookId));
        setBookState(bookData.shelf);
    }, [dispatch, bookId, bookData.shelf]);

    return (
        <div>
            <Header />
            <Link
                className="close-search"
                to="/"
            >
                Close
            </Link>
            {isLoading && <Loading />}
            {!isLoading && Object.keys(bookData).length > 0 &&
                <div className="book-details-page">
                    <h4 className="title">{bookData.title}</h4>
                    <div className="book-details">
                        <div className="book-details-img">
                            <img src={bookData.imageLinks.thumbnail} alt="thumbnail" />
                        </div>
                        <div className="book-details-info">
                            {bookData.authors && <div className="authors">
                                <span className="header">Authors: </span>
                                {bookData.authors.map((author, idx) => {
                                    return (
                                        <span key={idx}>{author}</span>
                                    )
                                })}
                            </div>}
                            <div className="div-container">
                                {bookData.publishedDate && <span className="date"><span className="header">Published in:</span> {bookData.publishedDate}</span>}
                                {bookData.pageCount && <span className="page-no"><span className="header">no. of pages:</span> {bookData.pageCount}</span>}
                            </div>
                            {Object.keys(bookData).includes("categories") && <div className="category">
                                <span className="header">Category: </span>
                                {bookData.categories.map((category, idx) => {
                                    return (
                                        <span key={idx}>{category}</span>
                                    )
                                })}
                            </div>}
                            {bookData.averageRating && <div className="div-container">
                                <span className="rate"><span className="header">Rating:</span> {bookData.averageRating}</span>
                                <span className="rate-counter"><span className="header">no. of rating: </span>{bookData.ratingsCount}</span>
                            </div>}
                        </div>
                        <div className="book-state-control">
                            <select value={bookState} onChange={({ target }) => handleSelect(bookData, target.value)}>
                                <option value="" disabled>
                                    Move to...
                                </option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    {bookData.description && <div className="book-desc">
                        <h4>description</h4>
                        <p>{bookData.description}</p>
                    </div>}
                </div>
            }
        </div>
    );
}
 
export default BookDetailspage;