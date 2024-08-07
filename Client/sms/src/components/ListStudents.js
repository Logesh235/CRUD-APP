import React, { useEffect, useState } from 'react'
import { deleteStudentAPI, getAllAPI } from '../Services/api';
import "../App.css"
import { Button, Table } from 'react-bootstrap';
import UpdateStudent from './UpdateStudent';


const ListStudents = () => {

    const[students,setStudents] = useState([]);
    const[modalShow,setModalShow] = useState(false);
    const[id,setId] = useState("")
    const[name,setName] = useState("")
    const[age,setAge] = useState("")


    useEffect(()=>{
    getStudents()
    })

    const handleUpdate = ({student}) =>{
         setId(student._id);
         setName(student.name)
         setAge(student.age)
         setModalShow(true)
    }

    const handleDelete = ({student}) =>{
        deleteStudentAPI(student._id).then(result=>{
            alert(result.data)
        }).catch((e)=>{
            console.log(e)
        })
    }

    const getStudents = ()=>{
        try{
            let response = getAllAPI()
            response.then((result)=>{
                setStudents(result.data)
            })
        }
        catch(e){
            console.log("Catched Error",e)
        }
    }

  return (
    <div className='LS-container'>
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <td>S.No</td>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Role</td>
                    <td>Team</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                {students?.map((student,index)=>{
                    return (
                            
                            <tr  key={student._id}>
                                <td>{index+1}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.role}</td>
                                <td>{student.team}</td>
                                <td><Button variant='success' onClick={()=>{handleUpdate({student})}}>Edit</Button><Button onClick={()=>{handleDelete({student})}} variant='danger'>Delete</Button></td>
                            </tr>

                    )})}
            </tbody>
        </Table>
        <UpdateStudent show={modalShow} id={id} name={name} age={age} onHide={()=>setModalShow(false)} />
    </div>
  )
}

export default ListStudents