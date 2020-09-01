import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';


class App extends Component {

  constructor() {
    super() ;
    this.state = {
      strings: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => this.setState({strings : data}))
  }

  handleChange = (e) => {this.setState({ searchField: e.target.value })
    }

  render() {
    const { strings, searchField } = this.state;
    const filteredStrings = strings.filter(string => 
      string.name.toLowerCase().includes(searchField.toLowerCase())
      );

  return (
    <div className='App'>
      <h1> Monsters Rolodex </h1>
        <SearchBox 
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList strings={filteredStrings} />

    </div>
  );
}
}

export default App;
