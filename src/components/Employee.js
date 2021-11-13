import { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";

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
            <h3>List of Employees</h3>
            <div>
                <table border="1">
                    <tr>
                        <td> Name </td>
                        <td> Department </td>
                        <td> Location </td>
                    </tr>
                    {
                        employeeReturn.map(
                            employeeMap => (
                                <tr key={employeeMap.employee_Id}>
                                    <td>{employeeMap.name}</td>
                                    <td>{employeeMap.department}</td>
                                    <td>{employeeMap.location}</td>
                                </tr>

                            )
                        )
                    }

                </table>
            </div>

        </div>

    )
    //return employeeReturn;
    
}

export default Employee;