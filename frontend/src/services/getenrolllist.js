import axios from '../config/axiosinstance';
const apiUrl = process.env.REACT_APP_API_URL;

export const enrolllist = async()=>{
    const token = localStorage.getItem('token');
    console.log(token);
    //http://localhost:5000/api/getenrolllist
    try{
    const res = await axios.get(`${apiUrl}/getenrolllist`,{
        headers:{
            Authorization : `${token}`,
        }
      
    });
    console.log(res);
    return res;
}
catch(error){
    throw new Error(error);
}
}