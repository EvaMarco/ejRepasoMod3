import React from 'react';
import './scss/main.scss';
import {clubs} from './components/clubs';
import ClubList from './components/ClubList';
import Club from './components/Club';


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
        <ClubList clubs = {this.state.clubs} />
      </div>
    );
  }
}

export default App;
