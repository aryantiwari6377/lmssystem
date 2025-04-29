import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;
export const login = (formData) =>{
        //http://localhost:5000/api/adminlogin 
        try{
                const res = axios.post(`${apiUrl}/adminlogin`, {formData});
        
    return res;
            
} catch(error){
   
           throw new Error('Network response was not ok: ' + error.message);
         }
}