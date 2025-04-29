import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL;

export const signup = async (formData) => {
  //http://localhost:5000/api/adminsignup 
  try{
 const response = await axios.post(`${apiUrl}/adminsignup`,{
  formData
 });
  
 
 return response;
  }
  catch(error){
    throw new Error('Network response was not ok: ' + error.message);
  }
};
