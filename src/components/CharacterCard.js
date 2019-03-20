import React from 'react';

const CharacterCard = (props) => {

  return (
    <div className="character-card">
      {props.studentInfo.name}
      <button value={props.studentInfo._id} onClick={props.handleAdd}>Toggle</button>
      <button>Edit</button>
    </div>
  )
}

export default CharacterCard;
