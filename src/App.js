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
      
    }
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
