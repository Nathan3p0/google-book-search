import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header><h1>Google Book Search</h1></header>
      <main>
      <section>
      <form className="form_search">
        <label htmlFor='search_input'>Search:</label>
        <input type='text' placeholder='Book Name' required />
        <button>Search</button>
      </form>
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
      </section>
      <section>
        <ul>
          <li>
            <h3>Henry I</h3>
            <img src='http://books.google.com/books/content?id=TRMaCAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api' alt='book cover' />
            <p>Author: C. Warren Hollister</p>
            <p>Price: $50.00</p>
            <p>The resulting volume is one that will be welcomed by students and general readers alike.</p>
          </li>
          <li>
            <h3>Henry VIII</h3>
            <img src='http://books.google.com/books/content?id=JW-seRfZ9toC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api' alt='book cover' />
            <p>Author: Alison Weir</p>
            <p>Price: $15.50</p>
            <p>In Oxfordshire, there were four houses: two hunting lodges, Beckley Manor, at <br />\nOtmoor, and Langley Manor, Shipton-underWychwood, once owned by Warwick <br />the Kingmaker, which <b>Henry</b> VII had rebuilt and often visited; Minster Lovell Hall,<br />&nbsp;</p>
          </li>
        </ul>
      </section>
      </main>
    </div>
  );
}

export default App;
