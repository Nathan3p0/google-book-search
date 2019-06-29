import React from 'react';

const FormFilters = (props) => {
    return ( 
        <form className='form_filters'>
          <label htmlFor='print_type'>Print Type:</label>
          <select>
            <option value='all'>All</option>
            <option value='books'>Books</option>
            <option value='magazines'>Magazines</option>
          </select>
          <label htmlFor='book_type'>Book Type:</label>
          <select>
            <option value=''>No Filter</option>
            <option value='full'>Full</option>
            <option value='partial'>Partial</option>
            <option value='ebooks'>All eBooks</option>
            <option value='free-ebooks'>Free eBooks</option>
            <option value='paid-ebooks'>Paid eBooks</option>
          </select>
        </form>
     );
}
 
export default FormFilters;