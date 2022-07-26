import Navbar from "./components/Navbar.jsx";
import BookContainer from "./components/BookContainer.jsx";
import BookPage from "./components/Bookpage.jsx";
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react"

function App() {

    let [ bookData, setBookData ] = useState([])

    useEffect(() => {
        if(bookData.length === 0)
        {
            fetch("https://jsonbookapi1.herokuapp.com/api/books")
                .then(res => res.json())
                .then(res => setBookData(res))  
        }
    }, [])

  return (
    <>
        <Navbar/>
        <main>
            <Routes>
                <Route path="/" element={<BookContainer data={bookData}/>}/>
                <Route path="/books/:id" element={<BookPage/>}/>
            </Routes>
        </main>
    </>
  );
}

export default App;
