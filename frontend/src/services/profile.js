import axios from '../config/axiosinstance';
const apiUrl = process.env.REACT_APP_API_URL;
export const profiledata = async(req,res) =>{
  
  const token = localStorage.getItem('token');
  if(!token){
    throw new Error("token not found");
  }
  //http://localhost:5000/api/profiledetail
    try{     
         const response = await axios.get(`${apiUrl}/profiledetail`, {
              
                headers: {
                  Authorization: `${token}`,
                }
              });
              
              return response.data;
    }catch(error){
        throw new Error('network error' + error.message);
    }
}
