import axios from '../config/axiosinstance';
const apiUrl = process.env.REACT_APP_API_URL;

export const logoutfun = async()=>{
  //http://localhost:5000/api/logout
    try{
     const token = localStorage.getItem("token");
   console.log(token);
     const res =  await axios.post(`${apiUrl}/logout`);
     if(res.status == 200){
     localStorage.removeItem("token");
     localStorage.clear();
     }
   
     return res;
    }
    catch(error){
        console.log(error);
    }
}