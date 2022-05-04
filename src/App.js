import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list';
import { SearchField } from './components/search-field/search-field';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }
  handleChange = (mon) => {
    this.setState({searchField: mon.target.value})
}
  
  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className='App-header'>
        <h1>Monster Rolodex</h1>
        <SearchField
          placeholder = 'search monsters'
          handleChange = { this.handleChange }
        />
        <CardList monsters= {filteredMonsters}></CardList>
      </div>
    )
  };
}

export default App;
