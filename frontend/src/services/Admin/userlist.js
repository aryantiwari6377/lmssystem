

import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;
export const adminuserlist = async() =>{
  //http://localhost:5000/api/adminuserlist 
        try{
          const response = await axios.get(`${apiUrl}/adminuserlist`);
          
          return response.data;
        }catch(error){
            throw new Error(error);
        }
   
}