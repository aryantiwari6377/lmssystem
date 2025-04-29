import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;
export const addcourse = async(formDataWithNumber) =>{
  //http://localhost:5000/api/addminaddcourse
        try{
          const response = await axios.post(`${apiUrl}/addminaddcourse`,{formDataWithNumber});
          return response;
        }catch(error){
            throw new Error(error);
        }
   
          
}