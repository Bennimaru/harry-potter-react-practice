import React from 'react';

const Nav = (props) => {
  return (
    <div id="nav">
      Find By Name: <input type="text" placeholder="Searching for..." onChange={props.handleChange} value={props.value}></input>
    </div>
  )
}

export default Nav;
