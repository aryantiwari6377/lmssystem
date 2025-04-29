
import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;
export const addsubcategory = async(category, subcategory) =>{
  //http://localhost:5000/api/adminsubcategory 
        try{
          const response = await axios.post(`${apiUrl}/adminsubcategory`,{category , subcategory});
          return response;
        }catch(error){
            throw new Error(error);
        }
   
          
}