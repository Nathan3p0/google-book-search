import React from 'react'
import './SearchForm.css'

const SearchForm = (props) => {
    return ( 
        <form className="form_search">
          <label htmlFor='search_input'>Search:</label>
          <input type='text' required />
          <button>Search</button>
        </form>
     );
}
 
export default SearchForm;