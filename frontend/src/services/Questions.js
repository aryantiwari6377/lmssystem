
import axios from '../config/axiosinstance';
const apiUrl = process.env.REACT_APP_API_URL;
export const getquestion = async (category) => {
  //http://localhost:5000/api/getquestion 
  try {
    console.log(category);
    const res = await axios.get(`${apiUrl}/getquestion`, {
      params: {
        category, 
      },
    });
    
    return res.data;
  } catch (error) {
    throw new Error('Network response was not ok: ' + error.message);
  }
};
