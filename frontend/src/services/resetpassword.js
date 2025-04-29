import axios from '../config/axiosinstance';
const apiUrl = process.env.REACT_APP_API_URL;
export const resetpassword = (newpassword,confirm, token) =>{
    //http://localhost:5000/api/resetpassword
    try{
    const res = axios.post(`${apiUrl}/resetpassword`,{newpassword,confirm, token});
    return res;
    }
    catch(error){
        throw new Error('Network response was not ok: ' + error.message);
    }
    

};