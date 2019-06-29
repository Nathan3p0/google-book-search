import React from 'react';
import './BookItem.css'

const BookItem = (props) => {
    return ( 
        <li className="book_item">
            <h2>Henry VIII</h2>
            <div className="book_details">
                <img src='http://books.google.com/books/content?id=JW-seRfZ9toC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api' alt='book cover' />
                <div>
                    <p>Author: Alison Weir</p>
                    <p>Price: $15.50</p>
                    <p>In Oxfordshire, there were four houses: two hunting lodges, Beckley Manor, at <br />\nOtmoor, and Langley Manor, Shipton-underWychwood, once owned by Warwick <br />the Kingmaker, which <b>Henry</b> VII had rebuilt and often visited; Minster Lovell Hall,<br />&nbsp;</p>
                </div>
            </div>
        </li>
     );
}
 
export default BookItem;