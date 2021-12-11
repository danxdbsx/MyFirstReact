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
const getEmployee = (employeeId) =>{
    
    return httpCommon.get(`/employee/employees/${employeeId}`);  
}

const putEmployee = (data) =>{
    return httpCommon.post('/employee/employees', data)
}

// FOR DELETE
const deleteEmployee = (employeeId) =>{
    return httpCommon.delete(`/employee/employees/${employeeId}`)
}

export default {getEmployees, postEmployee, getEmployee, putEmployee, deleteEmployee};