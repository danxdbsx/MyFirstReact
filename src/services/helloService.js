import httpCommon from "../commons/http-common";

const getHello = () =>{
    
    return httpCommon.get('/hello');  
}

const getHi = () =>{
    
    return httpCommon.get('/hi');  
}

export default {getHello, getHi};