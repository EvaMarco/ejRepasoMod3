import React from 'react';
import Club from './Club';
import PropTypes from 'prop-types';

class ClubList extends React.Component {

  render() {
    return(
      <ul className = "item-list">
      {this.props.clubs
      .map((club, index) => {
        return (
          <li key={index}>
            <Club 
            name ={club.name}
            fa = {club.fa}
            members = {club.members}/>
          </li>
        );
      })}
    </ul>
    )
    
  }
}

ClubList.propTyles = {

}
export default ClubList