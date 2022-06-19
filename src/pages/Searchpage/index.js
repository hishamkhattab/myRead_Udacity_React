import { useState,useEffect,useRef } from "react";
import {useSelector, useDispatch} from "react-redux";
import { Link } from "react-router-dom";

//components
import BookShelf from "../../components/BookShelf";
import Loading from "./../../components/Loading";

//reducers
import { searchBook } from "../../store/bookSlice";

//style
import "./style.css";

const Searchpage = () => {
    const { isLoading, searchBookList } = useSelector(state => state.books);
    const dispatch = useDispatch();
    const searchRef = useRef(null);

    const [searchParam, setSearchParam] = useState('');

    useEffect(() => {
        searchRef.current.focus();
    }, []);

    useEffect(() => {
        if (searchParam !== "") {
            dispatch(searchBook({query:searchParam,maxResult:10}));
        } else {
            dispatch(searchBook({query:'',maxResult:10}));
        }
    }, [dispatch, searchParam]);
    
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link
                    to="/"
                    className="close-search"
                >
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                <input
                        type="text"
                        ref={searchRef}
                        value={searchParam}
                        onChange={(e) => setSearchParam(e.target.value)}
                        placeholder="Search by title, author, or ISBN"
                    />
                </div>
            </div>
            <div className="search-books-results">
            {isLoading && <Loading/>}
                {!isLoading && searchBookList.length > 0 &&
                    <BookShelf bookList={searchBookList.filter(book => book.imageLinks)} />
                }
                {!isLoading && Object.keys(searchBookList).includes("error") &&
                    <p className="error-msg">There is no matched books</p>
                }
            </div>
        </div>
    );
}
 
export default Searchpage;