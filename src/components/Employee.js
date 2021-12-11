import { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { Link } from "react-router-dom";


const Employee = () =>{

    const [employeeReturn, setEmployee] = useState([])

    useEffect(() => {
        refreshEmployeeTable();
    })

    const refreshEmployeeTable = () =>{
        EmployeeService.getEmployees()
        .then(
            response => {
                setEmployee(response.data);
            }
        ) 
        
        .catch(
            err => {
                console.log("yo may mali sa code");
            }
        )
    }

    const deleteEmployee = (employeeId) =>{
        EmployeeService.deleteEmployee(employeeId)
        .then(
            response =>{
                console.log("rekt yung entry")
                refreshEmployeeTable();
            }
        )
        .catch(
            error =>{
                console.error("rekt yung code mo line 39 Employee.js")
            }
        )
    }

    return (
        <div>
            <br></br>
            <h3>List of Employees</h3>
            <br></br>
            <div className="container">
                <table className="table table-hover table-dark align-middle">
                    <thead>
                    <tr className="table-info">
                        <td> ID </td>
                        <td> Name </td>
                        <td> Department </td>
                        <td> Location </td>
                        <td> Actions </td>
                        
                    </tr>
                    </thead>
                    <tbody>
                    {
                        employeeReturn.map(
                            employeeMap => (
                                <tr key={employeeMap.employeeId}>
                                    <td>{employeeMap.employeeId}</td>
                                    <td>{employeeMap.name}</td>
                                    <td>{employeeMap.department}</td>
                                    <td>{employeeMap.location}</td>
                                    <td> 
                                        <div class="d-grid gap-2 d-md-flex ">
                                            <Link className="btn btn-primary" to={`edit/${employeeMap.employeeId}`}>Update</Link> 
                                            <button className="btn btn-danger" onClick={(e) => deleteEmployee(employeeMap.employeeId)}>Delete</button>
                                        </div>
                                    
                                    </td>
                                </tr>

                            )
                        )
                    }
                    </tbody>

                </table>
            </div>

        </div>

    )
    //return employeeReturn;
    
}

export default Employee;