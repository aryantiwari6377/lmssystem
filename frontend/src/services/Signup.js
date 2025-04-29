import axios from '../config/axiosinstance';
const apiUrl = process.env.REACT_APP_API_URL;

export const fetchsignupform = async (name, email, password) => {
  //http://localhost:5000/api/signup
  try{
 const response = await axios.post(`${apiUrl}/signup`,{
  name, email, password
 });
  
 
 return response.data.message;
  }
  catch(error){
    throw new Error('Network response was not ok: ' + error.message);
  }
};
