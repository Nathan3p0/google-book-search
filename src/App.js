import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import SearchForm from './Components/SearchForm';
import FormFilters from './Components/FormFilters';
import BookList from './Components/BookList';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      books : [],
      query : '',
      printType: 'all',
      filter: 'partial',
      apiKey : 'AIzaSyDGeGG17Dg3IbVNBSBebNHy8HZGt2vWsu0',
      searchURL : 'https://www.googleapis.com/books/v1/volumes',
    }
  }

  componentDidMount() {
    const params = {
      q : this.state.query,
      printType : this.state.printType,
      filter: this.state.filter
    }

    function formatQueryParams(params) {
      const queryItems = Object.keys(params)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      return queryItems.join('&');
    }
    const queryString = formatQueryParams(params)
    const url = this.state.searchURL + '?' + queryString;

    const options = {
      headers: new Headers({
        "X-Api-Key": this.state.apiKey})
    };

    fetch(url, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later');
        }
        return res.json();
      })
      .then(data => {
        const bookList = data.items.map(book => {
          return {
            id : book.id,
            title : book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            thumbnail : book.volumeInfo.imageLinks.smallThumbnail,
            snippet : book.hasOwnProperty('searchInfo') ? book.searchInfo.textSnippet : '',
            price : book.saleInfo.saleability === 'FOR_SALE' ? book.saleInfo.listPrice.amount : false,
          }
        })

        this.setState({
          books: bookList
        })
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Header title="Google Book Search" />
        <main>
        <section>
          <SearchForm />
          <FormFilters />
        </section>
        <section>
          <BookList />
        </section>
        </main>
      </div>
    );
  }
}

export default App;
