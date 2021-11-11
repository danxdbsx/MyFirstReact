import { useEffect, useState } from "react";
import helloService from "../services/helloService"

const Hello = () =>{

    // hooks ni react para magamit ni fx yung state concepts
    // param is variable, method, initial value is empty
    const [helloReturn, setHello] = useState([])

    // hook again
    useEffect(() => {
        helloService.getHello()
        .then(
            response => {
                setHello(response.data);
            }
        ) 
    })

    return helloReturn;
}

export default Hello;