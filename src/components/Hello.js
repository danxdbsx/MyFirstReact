import { useEffect, useState } from "react";
import helloService from "../services/helloService"

const Hello = () =>{

    // hooks ni react para magamit ni fx yung state concepts
    // param is variable, method, initial value is empty
    const [helloReturn, setHello] = useState(["alaws pang api pri"])

    // hook again
    useEffect(() => {
        helloService.getHello()
        .then(
            response => {
                setHello(response.data);
            }
        ) 
        .catch(
            err => {
                console.log("yo may mali sa code");
            }
        )
    })

    return helloReturn;
}

export default Hello;