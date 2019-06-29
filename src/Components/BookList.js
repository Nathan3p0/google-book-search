import React from 'react';
import BookItem from './BookItem';
import './BookList.css'

const BookList = (props) => {
    return ( 
        <ul className="book_list">
            <BookItem />
            <BookItem />
        </ul>
     );
}
 
export default BookList;