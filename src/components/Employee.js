import { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { Link } from "react-router-dom";


const Employee = () =>{

    const [employeeReturn, setEmployee] = useState([])

    useEffect(() => {
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
    })

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
                                    <td> <Link className="btn btn-primary" to={`edit/${employeeMap.employeeId}`}>Update</Link> </td>
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