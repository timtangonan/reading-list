import React, {useState, useEffect} from "react"
import firebase from "../firebase"

import Book from "./Book"

const useBooks = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        const unsubscribe =
        firebase.firestore().collection('books').onSnapshot((snapshot => {
            const newBooks  = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setBooks(newBooks)
        }))
        return () => unsubscribe()
    }, [])

    return books
}

const BookList = () => {
    const books = useBooks()
    return(
        <div>
            {books.map((book) => <Book key={book.id} title={book.title} author={book.author} genre={book.genre} id={book.id}/>)}
        </div>
    )
}

export default BookList