import React from 'react';

const BookItem = (props) => {
    return ( 
        <li>
            <h3>Henry VIII</h3>
            <img src='http://books.google.com/books/content?id=JW-seRfZ9toC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api' alt='book cover' />
            <p>Author: Alison Weir</p>
            <p>Price: $15.50</p>
            <p>In Oxfordshire, there were four houses: two hunting lodges, Beckley Manor, at <br />\nOtmoor, and Langley Manor, Shipton-underWychwood, once owned by Warwick <br />the Kingmaker, which <b>Henry</b> VII had rebuilt and often visited; Minster Lovell Hall,<br />&nbsp;</p>
        </li>
     );
}
 
export default BookItem;