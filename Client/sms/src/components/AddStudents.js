import React, { useState } from 'react'
import {Button} from 'react-bootstrap'
import "../App.css"
import { addStudentAPI } from '../Services/api';

const AddStudents = () => {


  const [inputs,setInputs] = useState({
    name : "",
    age : "",
    team : "",
    role : ""
  })

  const handleInputs = (e) => {
    setInputs((curr)=>({
      ...curr,[e.target.name]:e.target.value
    }))
  }

  const handleSubmit= (e) =>{
    try{
      addStudentAPI({inputs}).then(()=>{
      alert("Data added successfully..")
      setInputs({name : "",
        age : "",
        team : "",
        role : ""})
    })}
    catch(e){
      console.log("Catched Error",e)
    }
  } 

  return (
    <div className='AS-container'>
      <form> 
        <div>
        <input name='name' type='text' value={inputs.name} onChange={(e)=>handleInputs(e)} placeholder='Name'/>
        <input name='age' type='number' value={inputs.age} onChange={(e)=> handleInputs(e)} placeholder='Age'/>
        </div>
        <div>
        <select name='role' value={inputs.role} onChange={(e)=>handleInputs(e)}>
          <option  defaultChecked>Select Role</option>
          <option>Batter</option>
          <option>Bowler</option>
          <option>All-rounder</option>
        </select>
        <select name='team' value={inputs.team} onChange={(e)=>handleInputs(e)}>
          <option  defaultChecked>Select Team</option>
          <option>Afganistan</option>
          <option>Australia</option>
          <option>Bangladesh</option>
          <option>England</option>
          <option>India</option>
          <option>New Zealand</option>
          <option>Netherlands</option>
          <option>Pakistan</option>
          <option>Srilanka</option>
          <option>South Africa</option>
          <option>West Indies</option>
        </select>
        </div>
        <Button onClick={handleSubmit}>Add</Button>
      </form>
    </div>
  )
}

export default AddStudents