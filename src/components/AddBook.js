import React, { useState } from "react"
import firebase from "../firebase"

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
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Title</label>
                    <input type="text" value={title} onChange={e => setTitle(e.currentTarget.value)}></input>
                </div>
                <div>
                    <label>Author</label>
                    <input type="text" value={author} onChange={e => setAuthor(e.currentTarget.value)}></input>
                </div>
                <div>
                    <label>Genre</label>
                    <input type="text" value={genre} onChange={e => setGenre(e.currentTarget.value)}></input>
                </div>
                <button>Add Book</button>
            </form>
        </div>
    )
}

export default AddBook