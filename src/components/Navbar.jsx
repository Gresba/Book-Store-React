import { useNavigate } from 'react-router-dom';

function Navbar(props)
{
    const navigate = useNavigate();

    const handleChange = (e) => {
        console.log("Changed");
    }

    const goHome = () => {
        navigate("/")
    }

    const goUpload = () => {
        navigate("/upload")
    }

    return (
        <nav class="main-navbar">
            <h1 onClick={goHome}>Book Store</h1>
            <div class="search-container">
                <input id="search-bar" onChange={handleChange} placeholder="Search By Title or Author"></input>
                <button id="search-button">Search</button>
            </div>
            <h1 onClick={goUpload}>Upload New Book</h1>
        </nav>
    );
}

export default Navbar;
