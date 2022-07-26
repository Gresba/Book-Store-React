import { useState } from "react"
import { Link } from "react-router-dom"

function Navbar(props)
{
    const [input, setInput] = useState("")

    const handleChange = (e) => {
        if(input.length === 0)
        {
            // Add shown class to all
        }else{
            
        }
    }

    return (
        <nav class="main-navbar">
            <Link to="/" style={
                { 
                    textDecoration: 'none', 
                    color: "blue",
                }
                }>
                <h1>Book Store</h1>
            </Link>
            <div class="search-container">
                <input id="search-bar" value={input} onChange={handleChange} placeholder="Search By Title or Author"></input>
                <button id="search-button">Search</button>
            </div>
        </nav>
    );
}

export default Navbar;
