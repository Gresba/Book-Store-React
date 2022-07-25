

function Navbar(props)
{
    return (
        <nav class="main-navbar">
            <div class="search-container">
                <input id="search-bar" placeholder="Search By Title or Author"></input>
                <button id="search-button">Search</button>
            </div>
        </nav>
    );
}

export default Navbar;
