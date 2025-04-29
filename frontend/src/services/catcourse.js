
import axios from '../config/axiosinstance';
const apiUrl = process.env.REACT_APP_API_URL; 


export const categorycourse = async (category) => {
   //http://localhost:5000/api/categorycourse
    try {
        const response = await axios.get(`${apiUrl}/categorycourse`, {
            params: { category },
        });
       
        return response;
    } catch (error) {
        console.error("Error fetching courses:", error);
        throw error;
    }
};
