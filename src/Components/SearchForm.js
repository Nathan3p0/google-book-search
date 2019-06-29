import React from 'react'
import './SearchForm.css'

const SearchForm = (props) => {
    return ( 
        <form className='form_search'>
          <label htmlFor='search_input'>Search:</label>
          <input type='text' id='search_input' value={props.searchQuery} onChange={props.handleSearchChange} required />
          <button onClick={props.handleSubmit}>Search</button>
        </form>
     );
}
 
export default SearchForm;