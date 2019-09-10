import React from 'react';
import './scss/partials/App.scss';
import {clubs} from './components/clubs';
import ClubList from './components/ClubList';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      clubs: clubs
    }
  }
  render() {
    return (
      <div className="App">
        <h1 className = "app-title">Lista de Clubes</h1>
        <ClubList clubs = {this.state.clubs} />
      </div>
    );
  }
}

export default App;
