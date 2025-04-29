import axios from '../config/axiosinstance';
const apiUrl = process.env.REACT_APP_API_URL;
export const loginservice = async(password,email) => {
  //http://localhost:5000/api/login
    try{
           const res =  await axios.post(`${apiUrl}/login`, {password, email});
          
           return res;
            
     } catch(error){
      if (error.response) {
        return error.response;
      }
                throw new Error('Network response was not ok: ' + error.message);
              }
};
