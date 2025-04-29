import axios from '../config/axiosinstance';
const apiUrl = process.env.REACT_APP_API_URL;

export const userscore = async()=>{

     const token = localStorage.getItem('token');
     //http://localhost:5000/api/userscore
  try{
        const res = await axios.get(`${apiUrl}/userscore`,{
        
            headers:{
              Authorization: `${token}`,
            }
          
        });
        console.log(res);
        return  res.data;
  }

  catch(error){
   throw new Error('network error'+ error.message);
  }
}