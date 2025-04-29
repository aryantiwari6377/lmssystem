
import axios from '../config/axiosinstance';
const apiUrl = process.env.REACT_APP_API_URL; 
export const emailpassword =(email)=>{
    //http://localhost:5000/api/linksend
    try{
       const response = axios.post(`${apiUrl}/linksend`,{email});
       return response;
    }
    catch(error){
        throw new Error('Network response was not ok: ' + error.message);
    }
}