import React, {Component} from 'react';
import './App.css';
import StudentContainer from './components/CharacterList'
import TeamList from './components/TeamList'
import Nav from './components/Nav'
import {getGryffindor} from './endpoints.js'
import {getStudent} from './endpoints.js'

class App extends Component {

  state ={
    students:[],
    myTeam:[],
    filteredStudents:[],
    filteredTeam:[],
    userInput:""
  }
  componentDidMount(){
    fetch(getGryffindor)
      .then(res => res.json())
      .then(students => this.setState({students: students[0].members}))
  }

  handleAdd= (event)=>{
    let newStudents= this.state.students.filter(student=>student._id !== event.target.value)
    fetch(getStudent(event.target.value))
    .then(res=>res.json())
    .then(student =>
      this.setState({
        students: newStudents,
        myTeam: [student,...this.state.myTeam]
      })
    )
  }

  handleRemove= (event)=>{
    let newStudents= this.state.myTeam.filter(student=>student._id !== event.target.value)
    fetch(getStudent(event.target.value))
    .then(res=>res.json())
    .then(student=>this.setState({
      students:[student,...this.state.students],
      myTeam: newStudents
    }))
  }

  handleChange= (event)=>{
    this.setState({
      userInput: event.target.value
    })
  }

  filter= (array)=>{
    if (!this.state.userInput){
      return array
    }else {
      return [...array].filter(student=>student.name.toLowerCase().includes(this.state.userInput.toLowerCase()))
    }
  }

  render(){
    return (
      <div id="character-container">
        <Nav value={this.state.userInput} handleChange={this.handleChange}/>
        <StudentContainer students={this.filter(this.state.students)} handleAdd={this.handleAdd}/>
        <TeamList selected={this.filter(this.state.myTeam)} handleRemove={this.handleRemove}/>
      </div>
    )
  }
}

export default App;
