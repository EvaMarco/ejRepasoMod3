import React from 'react';

class Club extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p>{this.props.name}</p>
        <i className = {this.props.fa}></i>
        <ul className="memberList">
          {this.props.members}
        </ul>
      </React.Fragment>
    );
  }
}

export default Club;