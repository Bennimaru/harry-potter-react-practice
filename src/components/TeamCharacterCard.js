import React from 'react'

const TeamCharacterCard = (props)=>{

  return(
    <div className="character-card">
      Name: {props.studentInfo.name}
      <br/>
      Role: {props.studentInfo.role}
      <br/>
      Blood: {props.studentInfo.bloodStatus}
      <br/>
      Species: {props.studentInfo.species}
      <br/>
      <button value={props.studentInfo._id} onClick={props.handleRemove}>Toggle</button>
      <button>Edit</button>
    </div>
  )
}

export default TeamCharacterCard
