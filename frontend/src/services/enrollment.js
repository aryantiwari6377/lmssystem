import axios from '../config/axiosinstance';
const apiUrl = process.env.REACT_APP_API_URL;

export const enrollment = async(email, courseid) =>{
  //http://localhost:5000/api/enroll
      try{
         const response = axios.post(`${apiUrl}/enroll`, {email, courseid});
         console.log("after enrollment", response);
         return response;
      }
      catch(error){
        console.log(error);
        throw new Error('Enrollment failed');
      }
          
}; 