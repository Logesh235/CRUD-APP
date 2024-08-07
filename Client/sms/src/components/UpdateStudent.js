import React, {  useState, useEffect } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { updateStudentAPI } from '../Services/api'

const UpdateStudent = (props) => {

  const[name,setName] = useState("")
  const[age,setAge] = useState("")

  useEffect(()=>{
   console.log("Called")
   setName(props.name)
   setAge(props.age) 
  },[props.name,props.age])  

  const updateStudent = (e) =>{
    e.preventDefault();
    const id = props.id
    updateStudentAPI({id,name,age}).then(result=>{
      alert(result.data);
      props.onHide() 
    });
    }
  

  
   
  return (
    <div >
      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered 
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Student Details 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="number" value={age} onChange={(e)=>setAge(e.target.value)} placeholder="number" />
      </Form.Group>
      <Button onClick={updateStudent} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </div>
  )
}

export default UpdateStudent