import React from 'react';
import BookItem from './BookItem';
import './BookList.css'

const BookList = (props) => {

    const bookItems = props.books.map(book => (
        <BookItem key={book.id} bookInfo={book} />
    ))

    return ( 
        <ul className="book_list">
            {bookItems}
        </ul>
     );
}
 
export default BookList;