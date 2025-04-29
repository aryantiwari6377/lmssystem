
import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;
export const admincourselist = async() =>{
  //http://localhost:5000/api/admincourselist 
        try{
          const response = await axios.get(`{apiUrl}/admincourselist`);
          console.log(response);
          return response.data;
        }catch(error){
            throw new Error(error);
        }
   
}

export const adminremovecourse = async(id) =>{
  //http://localhost:5000/api/adminremovecourse 
  try{
    const response = await axios.delete("https://coursecraft-backend-3pke.onrender.com",{ data: { id } });
    console.log(response);
    return response;
  }catch(error){
      throw new Error(error);
  }

}

