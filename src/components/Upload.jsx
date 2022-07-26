import { useState } from "react"

function Upload()
{

    const [ title, setTitle ] = useState("");
    const [ author, setAuthor ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ imageLink, setImageLink ] = useState ("");
    const [ detailLink, setDetailLink ] = useState ("");
    const [ nyplLink, setNyplLink] = useState ("");
    const [ purchaseLink, setPurchaseLink ] = useState ("");

    const uploadBook = (e) => {
        e.preventDefault();
        fetch("https://jsonbookapi1.herokuapp.com/api/books", {
	        method: 'POST',
	        headers:{
	            'Content-Type':'application/json'
	        },
	        body: JSON.stringify(
                {
                    "Title": title,
                    "Author": author,
                    "Description": description,
                    "Cover": imageLink,
                    "URL": detailLink,
                    "linkToBuy": purchaseLink,
                    "NYPL_Link": nyplLink,
}
            )
        }) 
    }

    const handleChange = (e) => {
        const value = e.target.value;
        const type = e.target.name;
        if(type === "title")
            setTitle(value) 
        else if(type === "author") 
            setAuthor(value)
        else if(type === "description") 
            setDescription(value)
        else if(type === "imagelink") 
            setImageLink(value)
        else if(type === "detaillink") 
            setDetailLink(value)
        else if(type === "nypllink") 
            setNyplLink(value)
        else if(type === "purchaselink") 
            setPurchaseLink(value)
    }

    return (
        <form onSubmit={uploadBook} class="upload-container">
            <h3>Upload New Book</h3>
            <p>Title:</p>
            <input value={title} name="title" onChange={handleChange} type="text" placeholder="Enter Title..." required="true"/>
            <p>Author:</p>
            <input value={author} name="author" onChange={handleChange} type="text" placeholder="Enter Author..."/>
            <p>Description:</p>
            <textarea value={description} name="description" onChange={handleChange} type="text" placeholder="Enter Description..."/>
            <p>Image Link:</p>
            <input value={imageLink} name="imagelink" onChange={handleChange} type="text" placeholder="Enter Image Url..."/>
            <p>More Info Link:</p>
            <input value={detailLink} name="detaillink" onChange={handleChange} type="text" placeholder="Enter Detail Link..."/>
            <p>NYPL Link:</p>
            <input value={nyplLink} name="nypllink" onChange={handleChange} type="text" placeholder="Enter NYPL Link..."/>
            <p>Purchase Link:</p>
            <input value={purchaseLink} name="purchaselink" onChange={handleChange} type="text" placeholder="Enter Purchase Link..."/>
            <br/>
            <input type="submit"/>
        </form>
    );
}

export default Upload;
