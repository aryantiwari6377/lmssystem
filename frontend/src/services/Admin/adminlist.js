

import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;
export const adminlist = async() =>{
  //http://localhost:5000/api/adminlist 
        try{
          const response = await axios.get(`${apiUrl}/adminlist`);
          
          return response.data;
        }catch(error){
            throw new Error(error);
        }
   
}