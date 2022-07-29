import Navbar from "./components/Navbar.jsx";
import BookContainer from "./components/BookContainer.jsx";
import BookPage from "./components/Bookpage.jsx";
import Upload from "./components/Upload.jsx";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react"

function App() {

    let [ bookData, setBookData ] = useState([])
    let [ toggle, setToggle ] = useState(false)

    useEffect(() => {
            fetch("https://jsonbookapi1.herokuapp.com/api/books")
                .then(res => res.json())
                .then(res => setBookData(res))  
    }, [toggle])

  return (
    <>
        <Navbar/>
        <main>
            <Routes>
                <Route path="/" element={<BookContainer data={bookData}/>}/>
                <Route path="/books/:id" element={<BookPage setToggle={setToggle}/>}/>
                <Route path="/upload" element={<Upload/>}/>
            </Routes>
        </main>
    </>
  );
}

export default App;
