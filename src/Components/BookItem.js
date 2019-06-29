import React from 'react';
import './BookItem.css'

const BookItem = (props) => {
    return ( 
        <li className="book_item">
            <h2>{props.bookInfo.title}</h2>
            <div className="book_details">
                <img src={props.bookInfo.thumbnail} alt='Book cover' />
                <div className="book_info">
                    <p>Author: {props.bookInfo.authors}</p>
                    <p>Price: {props.bookInfo.price}</p>
                    <pre>{props.bookInfo.snippet.replace(/(<([^>]+)>)/ig,"")}</pre>
                </div>
            </div>
        </li>
     );
}
 
export default BookItem;