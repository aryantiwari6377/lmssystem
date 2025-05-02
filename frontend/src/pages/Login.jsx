// import React, { useState } from 'react';

// import loginimg from '../images/loginimg.PNG';
// import facebook from '../images/facebooklogo.PNG';
// import microsoft from '../images/microdoftlogo.PNG';
// import google from '../images/googlelogo.PNG';
// import linkdin from '../images/linkdinlogo.PNG';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faXmark, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
// import {Link, useNavigate} from 'react-router-dom';
// import {loginservice} from '../services/Login';
// import Signup from './Signup';


// const Login = ({ IsLoginOpen, toggleLogin }) => {
  
//   const [eyeopen, setEyeopen] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const [IsSignupopen, setIsSignup] = useState(false);

//   if (!IsLoginOpen) return null;

//   const eyehandle = () => {
//     setEyeopen(!eyeopen);
//   }

//   const togglesignup = ()=>{
//     setIsSignup(!IsSignupopen);
//   }


//   const handleform = async(event) => {
//         event.preventDefault()
//        const response = await loginservice(password,email);
//        console.log(response);
//        if(response.status === 200){
       
//         alert('login successful');
//         const { token } = response.data;
//         localStorage.setItem("token",token);
//         navigate('/');
//        }
//        else{
//         alert('login failed');
//        }
      
//   }

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 sm:w-full">
//       <div className="flex bg-white rounded-lg shadow-lg w-full md:w-[400px] lg:w-[900px] md:rounded-[30px] overflow-hidden">
//         <div className='hidden lg:block w-[50%] bg-[rgb(230,246,235)]'>
//           <div className='m-6'>
//             <img src={loginimg} />
//             <div className='p-4'>
//               <h2 className='font-black text-xl text-center'>Empower Yourself For Free</h2>
//               <p className='text-md mt-4 text-center'>Join our community of 40 million+ learners, upskill with CPD UK accredited courses, explore career development tools and psychometrics - all for free.</p>
//             </div>
//           </div>
//         </div>
//         <div className='w-full lg:w-[50%]'>
//           <div className='text-right mt-4 mr-4 text-xl'>
//             <FontAwesomeIcon icon={faXmark} className='cursor-pointer' onClick={toggleLogin} />
//           </div>
//           <div className='m-10 mt-8 p-6 bg-white flex flex-col gap-y-4'>
//             <div className='text-sm flex gap-x-4 justify-center'>
//               <a href="/signup"><p>Sign up</p></a>
//               <a href="login"><p>Log In</p></a>
//             </div>
//             <div className='flex justify-around mx-8'>
//               <a><img src={facebook} className='h-10 w-8' /></a>
//               <a><img src={microsoft} className='h-10 w-8' /></a>
//               <a><img src={google} className='h-10 w-8' /></a>
//               <a><img src={linkdin} className='h-10 w-8' /></a>
//             </div>
//             <div className='flex items-center justify-center'>
//               <hr className="flex-grow border-t border-gray-300" />
//               <span>or</span>
//               <hr className="flex-grow border-t border-gray-300" />
//             </div>
//             <form onSubmit={handleform}>
//             <div className='flex flex-col gap-y-3'>
//               <input type="email" className='bg-[rgb(243,246,247)] rounded-md h-8 pl-2' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
//               <div className='bg-[rgb(243,246,247)] rounded-md h-8 pl-2 flex justify-between'>
//                 <input type={eyeopen ? "text" : "password"} className='bg-[rgb(243,246,247)]' placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
//                 <FontAwesomeIcon icon={eyeopen ? faEye : faEyeSlash} className='pt-2' onClick={eyehandle} />
//               </div>
//             </div>
           
//             <div className='flex justify-between text-[12px]'>
//               <p><input type="checkbox" className='mr-1' />Keep me logged In</p>
//               <a className='text-green-700 font-bold'>Forgot Password?</a>
//             </div>
//             <button className='bg-[rgb(0,155,93)] text-white w-full h-10 rounded-lg text-sm font-bold my-3'>Log In</button>
//             <p className='text-[12px] text-center'>Don't have an account? <button className='text-green-700 font-bold' onClick={togglesignup}>Signup</button></p>
//             </form>  </div>
//         </div>
//       </div>
//       <Signup IsSignupopen={IsSignupopen} togglesignup={togglesignup}/>
//     </div>
//   );
// };

// export default Login;
import React, { useState, useEffect } from 'react';
import loginimg from '../images/loginimg.PNG';
import facebook from '../images/facebooklogo.PNG';
import microsoft from '../images/microdoftlogo.PNG';
import google from '../images/googlelogo.PNG';
import linkdin from '../images/linkdinlogo.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { loginservice } from '../services/Login';
import Signup from './Signup';
import { useLocation } from 'react-router-dom';

const Login = ({ isLoginOpen, toggleLogin, setIsLoginOpen }) => {
  const [eyeopen, setEyeopen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [IsSignupopen, setIsSignup] = useState(false); 
  const location = useLocation();

  if (!isLoginOpen) return null;

  // useEffect(() => {
  //   if (location.pathname === '/login') {
  //     setIsLoginOpen(true);
  //   } else {
  //     setIsLoginOpen(false);
  //   }
  // }, [location.pathname]);

  const eyehandle = () => {
    setEyeopen(!eyeopen);
  };

  const togglesignup = () => {
    setIsSignup(!IsSignupopen); 
  };

  const handleform = async (event) => {
    event.preventDefault();
    
    const response = await loginservice(password, email);
    console.log(response);

    if(response.status === 403){
         alert('Your account has been blocked ');
    }

    if (response.status === 200) {
      alert('login successful');
      const { token } = response.data;
      localStorage.setItem('token', token);
      sessionStorage.setItem('token',token);
      toggleLogin();
      navigate("/");
    } else {
      alert('login failed');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 sm:w-full">
      <div className="flex bg-white rounded-lg shadow-lg w-full md:w-[400px] lg:w-[900px] md:rounded-[30px] overflow-hidden">
        <div className='hidden lg:block w-[50%] bg-[rgb(230,246,235)]'>
          <div className='m-6'>
            <img src={loginimg} />
            <div className='p-4'>
              <h2 className='font-black text-xl text-center'>Empower Yourself For Free</h2>
              <p className='text-md mt-4 text-center'>Join our community of 40 million+ learners, upskill with CPD UK accredited courses, explore career development tools and psychometrics - all for free.</p>
            </div>
          </div>
        </div>
        <div className='w-full lg:w-[50%]'>
          <div className='text-right mt-4 mr-4 text-xl'>
            <FontAwesomeIcon icon={faXmark} className='cursor-pointer' onClick={toggleLogin} />
          </div>
          <div className='m-10 mt-8 p-6 bg-white flex flex-col gap-y-4'>
            <div className='text-sm flex gap-x-4 justify-center'>
              <button><p>Sign up</p></button>
              <button ><p>Log In</p></button>
            </div>
            <div className='flex justify-around mx-8'>
              <a><img src={facebook} className='h-10 w-8' /></a>
              <a><img src={microsoft} className='h-10 w-8' /></a>
              <a><img src={google} className='h-10 w-8' /></a>
              <a><img src={linkdin} className='h-10 w-8' /></a>
            </div>
            <div className='flex items-center justify-center'>
              <hr className="flex-grow border-t border-gray-300" />
              <span>or</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>
            <form onSubmit={handleform}>
              <div className='flex flex-col gap-y-3'>
                <input type="email" className='bg-[rgb(243,246,247)] rounded-md h-8 pl-2 outline-none' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                <div className='bg-[rgb(243,246,247)] rounded-md h-8 pl-2 flex justify-between'>
                  <input type={eyeopen ? "text" : "password"} className='bg-[rgb(243,246,247)] w-[90%] outline-none' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                  <FontAwesomeIcon icon={eyeopen ? faEye : faEyeSlash} className='pt-2' onClick={eyehandle} />
                </div>
              </div>
              <div className='flex justify-between text-[12px]'>
                <p><input type="checkbox" className='mr-1' />Keep me logged In</p>
                <a className='text-green-700 font-bold cursor-pointer' href="/emaipassword">Forgot Password?</a>
              </div>
              <button className='bg-[rgb(0,155,93)] text-white w-full h-10 rounded-lg text-sm font-bold my-3'>Log In</button>
              <p className='text-[12px] text-center'>Don't have an account? <button type="button" className='text-green-700 font-bold' onClick={togglesignup}>Signup</button></p>
            </form>
          </div>
        </div>
      </div>
    
      <Signup IsSignupopen={IsSignupopen} togglesignup={togglesignup}  toggleLogin={toggleLogin} />
    </div>
  );
};

export default Login;
