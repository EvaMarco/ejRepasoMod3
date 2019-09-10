import React from 'react';
import '../scss/partials/Club.scss';

class Club extends React.Component {
  render() {
    return(
      <div className="card-club">
        <div className="card-club__icon">
          <i className = {this.props.fa}></i>
        </div>
        <div className="card-club__content">
          <div className="card-club__name-div">
            <h2 className="card-club__name" >{this.props.name}</h2>
          </div>
            <h3 className="card-club__member-list">Miembros:</h3>
          <ul className="card-club__members">
            {this.props.members.map((member, index) => 
              <li key={index}> 
                {member}
              </li>)}
          </ul>
        </div>
      </div>
    )
  }
}

export default Club;