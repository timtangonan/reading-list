import React, { useState } from "react"
import firebase from "../firebase"

import "../styles/addbook.css"

const AddBook = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [genre, setGenre] = useState('')

    const onSubmit = e => {
        e.preventDefault()
        firebase.firestore().collection('books').add({
            title,
            author,
            genre
        })
        .then(() => {
            setTitle('')
            setAuthor('')
            setGenre('')
        })
    }

    return(
        <div className="form-container">
            <form onSubmit={onSubmit} className="form">
                <div className="form-category">
                    <label className="form-label">Title</label>
                    <input required type="text" value={title} onChange={e => setTitle(e.currentTarget.value)}></input>
                </div>
                <div className="form-category">
                    <label className="form-label">Author</label>
                    <input required type="text" value={author} onChange={e => setAuthor(e.currentTarget.value)}></input>
                </div>
                <div className="form-category">
                    <label className="form-label">Genre</label>
                    <input required type="text" value={genre} onChange={e => setGenre(e.currentTarget.value)}></input>
                </div>
                <button>Add Book</button>
            </form>
        </div>
    )
}

export default AddBook