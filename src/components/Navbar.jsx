import { Link } from "react-router-dom"

function Navbar(props)
{
    const handleChange = (e) => {
        console.log("Changed");
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
                <input id="search-bar" onChange={handleChange} placeholder="Search By Title or Author"></input>
                <button id="search-button">Search</button>
            </div>
        </nav>
    );
}

export default Navbar;
