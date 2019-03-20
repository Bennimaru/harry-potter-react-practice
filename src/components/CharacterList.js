import React from 'react';
import Card from './CharacterCard';

const StudentContainer = (props) => {

  return(
    <div id="character-list">
      <h2>Character List</h2>
      {props.students.map(student=>
        <Card key={student._id} studentInfo={student} handleAdd={props.handleAdd}/>
      )}
    </div>
  )
}

export default StudentContainer;
