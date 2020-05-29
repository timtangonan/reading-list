import React from "react"
import AddBook from "./AddBook"
import BookList from "./BookList"
import DevInfo from "./DevInfo"

import "../styles/panel.css"

const Panel = () => {
    return(
        <div className="panel">
            <div className="title-container">
                <h1 class="app-title">Reading List <span role="img" aria-label="books">📚</span></h1>
            </div>
            <DevInfo />
            <AddBook />
            <BookList />
        </div>
    )
}

export default Panel