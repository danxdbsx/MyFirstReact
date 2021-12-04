import httpCommon from "../commons/http-common";
// FOR GET
const getEmployees = () =>{
    
    return httpCommon.get('/employee/employees');  
}
// FOR POST
const postEmployee = (data) =>{
    return httpCommon.post('/employee/employees', data)
}

// FOR UPDATE
const getEmployee = (id) =>{
    
    return httpCommon.get(`/employee/employees/${id}`);  
}

const putEmployee = (data) =>{
    return httpCommon.post('/employee/employees', data)
}

export default {getEmployees, postEmployee, getEmployee, putEmployee};