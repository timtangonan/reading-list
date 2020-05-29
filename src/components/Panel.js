import React from "react"
import AddBook from "./AddBook"
import BookList from "./BookList"

const Panel = () => {
    return(
        <div className="panel">
            <h1>Test</h1>
            <AddBook />
            <BookList />
        </div>
    )
}

export default Panel