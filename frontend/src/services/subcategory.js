import axios from '../config/axiosinstance';

const apiUrl = process.env.REACT_APP_API_URL;

export const subcategory = async (category) => {
   //http://localhost:5000/api/getsubcategory
    try {
        const response = await axios.get(`${apiUrl}/getsubcategory`, {
            params: { category },
        });
        console.log(response);
        return response;
    } catch (error) {
        console.error("Error fetching courses:", error);
        throw error;
    }
};
