import axios from '../config/axiosinstance';
const apiUrl = process.env.REACT_APP_API_URL;
export const enrollverify = async (courseid) => {
 
  const token = localStorage.getItem('token');
  console.log("token is",token);

  const response = await axios.get(`${apiUrl}/verifyenroll`,{
    params: { courseid },
    headers:{
      Authorization: `${token}`,
    }
  
});

 console.log(response);
  return response;
};
