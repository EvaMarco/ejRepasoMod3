import React from 'react';
import './scss/main.scss';
import ClubList from './components/ClubList';

class App extends React.Component {

  render() {
    return (
      <div className = "App">
        <ClubList />
      </div>
    );
  }
}

export default App;
