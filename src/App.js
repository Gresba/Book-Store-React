import Navbar from "./components/Navbar.jsx";
import BookContainer from "./components/BookContainer.jsx";

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
      <div class="app">
          <Navbar/>
          <BookContainer data={bookData}/>
      </div>
  );
}

export default App;
