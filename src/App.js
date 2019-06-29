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
      query : 'llamas',
      printType: 'all',
      filter: 'partial',
      apiKey : 'AIzaSyDGeGG17Dg3IbVNBSBebNHy8HZGt2vWsu0',
      searchURL : 'https://www.googleapis.com/books/v1/volumes',
    }
  }

  componentDidMount() {
    
    this.fetchData()
  }

  fetchData = () => {
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
            snippet : book.hasOwnProperty('volumeInfo') ? book.volumeInfo.description : '',
            price : book.saleInfo.saleability === 'FOR_SALE' ? '$' + book.saleInfo.listPrice.amount : 'Not for Sale',
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

  handleSubmit = (event) => {
    event.preventDefault();
    this.fetchData()
  }

  handlePrintTypeChange = (event) => {
    this.setState(
      {printType: event.target.value}
    )
  }

  handleFilterChange = (event) => {
    this.setState(
      {filter: event.target.value}
    )
  }

  handleSearchChange = (event) => {
    this.setState(
      {query: event.target.value}
    )
  }

  render() {
    return (
      <div className="App">
        <Header title="Google Book Search" />
        <main>
        <section>
          <SearchForm searchQuery={this.state.query} handleSearchChange={this.handleSearchChange} handleSubmit={this.handleSubmit} />
          <FormFilters handlePrintTypeChange={this.handlePrintTypeChange} handleFilterChange={this.handleFilterChange}  />
        </section>
        <section>
          <BookList books={this.state.books} />
        </section>
        </main>
      </div>
    );
  }
}

export default App;
