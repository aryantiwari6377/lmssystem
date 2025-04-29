import axios from '../config/axiosinstance';
const apiUrl = process.env.REACT_APP_API_URL;

export const unenroll = async(id)=>{

     const token = localStorage.getItem('token');
     //http://localhost:5000/api/unenroll
  try{
        const res = await axios.post(`${apiUrl}/unenroll`,
            {courseid : id},{
          
            headers:{
              Authorization: `${token}`,
            }
          
        });
      
        return  res;
  }

  catch(error){
   throw new Error('network error'+ error.message);
  }
}