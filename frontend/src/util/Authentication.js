import { useNavigate } from "react-router-dom";

const checkAuth = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

export default checkAuth;
