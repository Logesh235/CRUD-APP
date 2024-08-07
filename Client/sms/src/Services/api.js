import axios from 'axios'

const URL = "http://localhost:3001"
export const addStudentAPI =  async (student) =>{
    return  axios.post(`${URL}/addStudent`,student);
}

export const getAllAPI = async()=>{
    let response =  await axios.get(`${URL}/getAll`)
    return response
}

export const updateStudentAPI = async({id,name,age})=>{
    let response = await axios.put(`${URL}/updateStudent/${id}`,{name,age})
    return response 
}

export const deleteStudentAPI = async(id)=>{
    let response = await axios.delete(`${URL}/deleteStudent/${id}`)
    return response
}


