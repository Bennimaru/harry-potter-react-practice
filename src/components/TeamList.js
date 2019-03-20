import React from 'react';
import TeamCharacterCard from './TeamCharacterCard';

const TeamList = (props) => {
  
  return (
    <div id="team-list">
      <h2>My Wizarding Team</h2>
      {props.selected.map(student=>
        <TeamCharacterCard key={student._id} studentInfo={student} handleRemove={props.handleRemove}/>
      )}
    </div>
  )
}

export default TeamList;
