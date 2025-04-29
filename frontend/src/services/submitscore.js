import axios from '../config/axiosinstance';
const apiUrl = process.env.REACT_APP_API_URL;
export const submitscore = async (category,selectedOptions) => {
    const token = localStorage.getItem('token'); 
    //http://localhost:5000/api/submitscore
  try {
    console.log(category);
    const res = await axios.post(`${apiUrl}/submitscore`, {
        category, selectedOptions
    },
    {
      headers: {
        Authorization: `${token}`, 
      },
    }
);
    
    return res;
  } catch (error) {
    throw new Error('Network response was not ok: ' + error.message);
  }
};