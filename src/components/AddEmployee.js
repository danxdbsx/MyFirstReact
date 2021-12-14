import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import EmployeeService from "../services/EmployeeService";


const AddEmployee = () =>{
    //variables
    const [name, setName] = useState([]);
    const [department, setDepartment] = useState([]);
    const [location, setLocation] = useState([]);
    const navigate = useNavigate();
    const {employeeId} = useParams();

    // supposedly for populating the fields, kulang lang pala ng value={name}..etc yung mga table data lels
    useEffect(
        () => {
            if(employeeId) {
                EmployeeService.getEmployee(employeeId) // returns a promise
                .then(
                    response => {
                        setName(response.data.name);
                        setDepartment(response.data.department);
                        setLocation(response.data.location);

                        
                        alert("Form will be populated badi edit mo na");
                    }
                )
                .catch(
                    error =>{
                        console.log("Ayaya check mo line 35 AddEmployee.js")
                    }

                )
            }
        },[]
    )

    
    //save method
    const saveEmployee = (e) =>{
        e.preventDefault();
        

        const employee = {employeeId, name, department, location};

        if (employeeId) {
            //UPDATE
            
            EmployeeService.putEmployee(employee) //this becomes a promise
            .then(response =>{
                
                console.log("gg updated", response.data)
                navigate("/employees")
                alert("updated na badidap")
                                   
            })
            .catch(error => {
                console.log("may error lods")
            })
        }
        else {
            //POST NEW
                EmployeeService.postEmployee(employee) //this becomes a promise
                .then(response =>{
                    console.log("gg", response.data)
                    navigate("/employees")
                    alert("added new badi!")
                } 
                )
                .catch(error => {
                    console.log("may error lods")
                })
        }
    
    }

    return(
        <div className="container">
            <br></br>
            <h3>Add New Employee</h3>
            <br></br>

            <form class="row g-3" noValidate>
                <div class="col-md-4">
                    <label for="name" class="form-label">Name</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="name" 
                        value={name}
                        placeholder="Input employee location here"
                        onChange={
                            (e) => setName(e.target.value)
                        }
                        required/>
                </div>
                <div class="col-md-4">
                    <label for="department" class="form-label">Department</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="department" 
                        value={department}
                        placeholder="Input employee location here"
                        onChange={
                            (e) => setDepartment(e.target.value)
                        }
                        required/>
                </div>
                <div class="col-md-4">
                    <label for="location" class="form-label">Location</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="location"
                        value={location}
                        placeholder="Input employee location here"
                        onChange={
                            (e) => setLocation(e.target.value)
                        } 
                        required/>
                </div>

                <button 
                    type="submit" 
                    className="btn btn-primary" 
                    onClick={(e) =>saveEmployee(e)
                    }>Save</button>
            </form>

        </div>
    )
}

export default AddEmployee;