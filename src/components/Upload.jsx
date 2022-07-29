import { useState } from "react"

function Upload()
{
    const [ id, setId ] = useState("");
    const [ title, setTitle ] = useState("");
    const [ author, setAuthor ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ imageLink, setImageLink ] = useState ("");
    const [ detailLink, setDetailLink ] = useState ("");
    const [ nyplLink, setNyplLink] = useState ("");
    const [ purchaseLink, setPurchaseLink ] = useState ("");

    const updateObject = {}

    const updateBook = (e) => {
        e.preventDefault();
        if(id.length > 0)
        {
            if(title.length !== 0)
                updateObject.Title = title
            if(author.length !== 0)
                updateObject.Author = author;
            if(description.length !== 0)
                updateObject.Description =description;
            if(imageLink.length !== 0)
                updateObject.Cover = imageLink;
            if(detailLink.length !== 0)
                updateObject.URL = detailLink;
            if(nyplLink.length !== 0)
                updateObject.NYPL_Link = nyplLink;
            if(purchaseLink.length !== 0)
                updateObject.linkToBuy = purchaseLink;
            console.log(updateObject)

            fetch(`https://jsonbookapi1.herokuapp.com/api/books/${id}`, {
                method: 'PUT',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(updateObject)
            })
        }else{
            uploadBook(e)
        }

        setId("");
        setTitle("");
        setAuthor("");
        setDescription("");
        setImageLink("");
        setDetailLink("");
        setNyplLink("");
        setPurchaseLink("");
    }

    const uploadBook = (e) => {
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
        if(type === "id")
            setId(value);
        else if(type === "title")
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
        <form onSubmit={updateBook} class="upload-container">
            <h3>Upload/Update New Book</h3>
            <p>Id:</p>
            <input value={id} name="id" onChange={handleChange} type="text" placeholder="Enter Id To Update..."/>
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
