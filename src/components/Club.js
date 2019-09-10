import React from 'react';

class Club extends React.Component {

  render() {
    return(
      <div className="clubCard">
        <div className="clubSimbol">
          <i className = {this.props.fa}></i>
        </div>
        <div className="clubName">
          <p>{this.props.name}</p>
        </div>
        <ul className="memberList">
          {this.props.members.map((member, index) => 
            <li key={index}> 
              {member}
            </li>)}
        </ul>
      </div>
    )
    
  }
}

export default Club;