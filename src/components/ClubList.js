import React from 'react';
import Club from './Club';
import '../scss/partials/ClubList.scss';
import PropTypes from 'prop-types';

class ClubList extends React.Component {
  render() {
    return(
      <ul className = "clubs">
      {this.props.clubs
      .map((club, index) => {
        return (
          <li className = "club" key={index}>
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

ClubList.propTypes = {
  club: PropTypes.object
}
export default ClubList