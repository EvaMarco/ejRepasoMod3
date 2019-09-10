import React from 'react';
import './scss/main.scss';
import {clubs} from './components/clubs'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      clubs: clubs
    }
  }
  render() {
    return (
      <ul className = "item-list">
      {this.state.clubs
      .map(club => {
        return (
          <li key={clubs.indexOf(club)}>
            <div className="clubSimbol">
              <i className = {club.fa}></i>
            </div>
            <div className="clubName">
              <p>{club.name}</p>
            </div>
            <ul className="memberList">
              {club.members.map(member => 
                <li key={club.members.indexOf(member)}> 
                  {member}
                </li>)}
            </ul>
          </li>
        );
      })}
    </ul>
    );
  }
}

export default App;
