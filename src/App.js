import { Route, BrowserRouter, Routes } from "react-router-dom";

//pages
import Homepage from "./pages/Homepage";
import Searchpage from "./pages/Searchpage";
import BookDetailspage from "./pages/BookDetailsPage";

//styles
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search" element={<Searchpage />} />
        <Route path="/book/:bookId" element={<BookDetailspage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
