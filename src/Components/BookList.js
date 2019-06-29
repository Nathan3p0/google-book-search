import React from 'react';
import BookItem from './BookItem';

const BookList = (props) => {
    return ( 
        <ul>
            <BookItem />
            <BookItem />
          </ul>
     );
}
 
export default BookList;