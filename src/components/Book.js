import React from "react"

import "../styles/book.css"

import firebase from "../firebase"

const handleDelete = (id) => {
    console.log(id)
    firebase.firestore().collection('books').doc(id).delete().then(function() {
        console.log("deleted")
    }).catch(function(error){
        console.error("error deleting item:", error)
    })
}

const Book = ({ title, author, genre, id }) => {
    return(
        <div className="book-container" style={{display: 'flex', border: '1px solid gray'}}>
            <div className="book-info">
                <h3>{title}</h3>
                <p>{author}</p>
                <p>{genre}</p>
                {/* <p>{id}</p> */}
            </div>
            <div>
                <button className="book-done" onClick={() => {handleDelete(id)}}><span className="completed-icon" role="img" aria-label="done">👍</span></button>
            </div>
        </div>
    )
}

export default Book