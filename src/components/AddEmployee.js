import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import EmployeeService from "../services/EmployeeService";


const AddEmployee = () =>{
    //variables
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [location, setLocation] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();
    
    //save method
    const saveEmployee = (e) =>{
        e.preventDefault();
        const employee = {id, name, department, location};

        if (id) {
            //UPDATE
            EmployeeService.putEmployee(employee) //this becomes a promise
            .then(response =>{
                
                console.log("gg updated", response.data)
                navigate("/employees")                   
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
                    
                } 
                )
                .catch(error => {
                    console.log("may error lods")
                })
        }}

    return(
        <div className="container">
            <br></br>
            <h3>Add New Employee</h3>
            <br></br>
            <form>
                <div className="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="name" 
                        placeholder="Input employee name here"
                        onChange={
                            (e) => setName(e.target.value)
                        }
                        />
                </div>
                <div className="mb-3">
                    <label for="department" class="form-label">Department</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="department" 
                        placeholder="Input employee department here"
                        onChange={
                            (e) => setDepartment(e.target.value)
                        }
                        />
                </div>
                <div className="mb-3">
                    <label for="location" class="form-label">Location</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="location" 
                        placeholder="Input employee location here"
                        onChange={
                            (e) => setLocation(e.target.value)
                        }
                        />
                </div>

                <button 
                    type="submit" 
                    className="btn btn-primary" 
                    onClick={(e) =>saveEmployee(e)}>Save</button>
            </form>
        </div>
    )
}

export default AddEmployee;