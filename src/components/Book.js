import React from "react"

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
        <div style={{display: 'flex', border: '1px solid gray'}}>
            <div>
                <h3>{title}</h3>
                <p>{author}</p>
                <p>{genre}</p>
                {/* <code>{id}</code> */}
            </div>
            <div>
                <button onClick={() => {handleDelete(id)}}>X</button>
            </div>
        </div>
    )
}

export default Book