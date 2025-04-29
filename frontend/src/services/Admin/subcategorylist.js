
import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;
export const adminsubcategorylist = async() =>{
  //http://localhost:5000/api/adminsubcategorylist 
        try{
          const response = await axios.get(`${apiUrl}/adminsubcategorylist`);
          console.log("sub:",response);
          return response.data;
        }catch(error){
            throw new Error(error);
        }
   
}



