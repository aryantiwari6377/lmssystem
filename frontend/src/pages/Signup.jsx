
// import React, { useState } from 'react';

// import loginimg from '../images/loginimg.PNG'
// import facebook from '../images/facebooklogo.PNG';
// import microsoft from '../images/microdoftlogo.PNG';
// import google from '../images/googlelogo.PNG';
// import linkdin from '../images/linkdinlogo.PNG';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faXmark, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
// import {fetchsignupform} from "../services/Signup";

// const Signup = ({IsSignupopen, togglesignup}) => {

//   const [name, setname] = useState("");     
//   const [email, setemail] = useState("");
//   const [password, setpassword] = useState("");
//   const [eyeslash,setEyeSlash] = useState(false);
//   // const [isopen, setIsopen] = useState(false);

//   // const togleopen = ()=>{
//   //   setIsopen(!isopen);
//   // }
//   if (!IsSignupopen) return null;

//   const formhandle = async(event) => {
//     event.preventDefault();
//     try{
//       console.log(name,email,password);
//     const response =  await fetchsignupform(name,email,password);
//     console.log("this is response from server",response);
//   }
//     catch(error){
//       console.log(error);
//     }
// }

// const eyehandler = (req, res) =>{
//   setEyeSlash(!eyeslash);
// }


//   return (
 
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 sm:w-full">
//       <form onSubmit={formhandle}>  <div className="flex bg-white rounded-lg shadow-lg  w-full md:w-[400px]  lg:w-[900px]  md:rounded-[30px] overflow-hidden">
        
//         <div className='hidden lg:block w-[50%] bg-[rgb(230,246,235)]'>
//             <div className='m-6'>
//             <img src={loginimg}/>
//             <div className='p-4'><h2 className='font-black text-xl text-center'>Empower Yourself For Free</h2><p className='text-md mt-4 text-center'> Join our community of 40 million+ learners, upskill with CPD UK accredited courses, explore career development tools and psychometrics - all for free. </p></div>
//         </div>
//         </div>
//         <div className='w-full lg:w-[50%]'>
//        <div className='text-right mt-4 mr-4 text-xl  '><FontAwesomeIcon icon={faXmark} className='cursor-pointer' onClick={togglesignup}/></div>
//             <div className='m-10 mt-8 p-6 bg-white flex flex-col gap-y-4'>
      
//             <div className='text-sm flex gap-x-4 justify-center'><a href="/signup"><p>Sign up</p></a><a href="/login"><p>Log In</p></a></div>
//             <div className='flex justify-around mx-8'><a><img src={facebook } className='h-10 w-8'/></a><a><img src={microsoft} className='h-10 w-8'/></a><a><img src={google} className='h-10 w-8'/></a><a><img src={linkdin} className='h-10 w-8'/></a></div>
//             <div className='flex items-center justify-center'><hr className="flex-grow border-t border-gray-300"/><span>or</span><hr className="flex-grow border-t border-gray-300"/></div>
//             <div className='flex flex-col gap-y-3'>
//                 <input type="Name" className='bg-[rgb(243,246,247)] rounded-md h-8 pl-2' placeholder='Name' onChange={(e)=>{ setname(e.target.value)}}/>
//                 <input type="email" className='bg-[rgb(243,246,247)] rounded-md h-8 pl-2' placeholder='Email' onChange={(e)=>{ setemail(e.target.value)}} />
//                 {/* <input type="password" className='bg-[rgb(243,246,247)] rounded-md h-8 pl-2' placeholder='Password'/> */}
//                 <div className='bg-[rgb(243,246,247)] rounded-md h-8 pl-2 flex justify-between'><input type={eyeslash ? "text" : "password"}  className='bg-[rgb(243,246,247)]'  placeholder='Create Password'  onChange={(e)=>{ setpassword(e.target.value) }}/><FontAwesomeIcon icon={ eyeslash ?  faEye : faEyeSlash } className='pt-2' onClick={eyehandler}/></div>
//             </div>
//             {/* <div className='flex justify-between text-[12px]'><p><input type="checkbox" className='mr-1'/>Keep me logged In</p><a className='text-green-700 font-bold'>Forgot Passwoed?</a></div> */}
//             <button className='bg-[rgb(0,155,93)] text-white w-full h-10 rounded-lg text-sm font-bold my-3'>Sign Up</button>
//               <p className='text-[12px] text-center'>have an account? <a href="/login"><span className='text-green-700 font-bold' >Login</span></a></p>
//             </div>
           
//         </div>
//         </div>
//         </form>
//     </div>
 
//   );
// };

// export default Signup;

import React, { useState } from 'react';
import loginimg from '../images/loginimg.PNG';
import facebook from '../images/facebooklogo.PNG';
import microsoft from '../images/microdoftlogo.PNG';
import google from '../images/googlelogo.PNG';
import linkdin from '../images/linkdinlogo.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { fetchsignupform } from '../services/Signup';

const Signup = ({ IsSignupopen, togglesignup,  toggleLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eyeslash, setEyeSlash] = useState(false);

  if (!IsSignupopen) return null;

  const formhandle = async (event) => {
    event.preventDefault();
    try {
      console.log(name, email, password);
      const response = await fetchsignupform(name, email, password);
      alert("account created");
      togglesignup();
      console.log("this is response from server", response);
    } catch (error) {
      console.log(error);
    }
  };

  const eyehandler = () => {
    setEyeSlash(!eyeslash);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 sm:w-full">
      <form onSubmit={formhandle}>
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
              <FontAwesomeIcon icon={faXmark} className='cursor-pointer' onClick={togglesignup} />
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
              <div className='flex flex-col gap-y-3'>
                <input type="text" className='bg-[rgb(243,246,247)] rounded-md h-8 pl-2 outline-none' placeholder='Name' onChange={(e) => setName(e.target.value)} />
                <input type="email" className='bg-[rgb(243,246,247)] rounded-md h-8 pl-2 outline-none' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                <div className='bg-[rgb(243,246,247)] rounded-md h-8 pl-2 flex justify-between'>
                  <input type={eyeslash ? "text" : "password"} className='bg-[rgb(243,246,247)] w-[90%] outline-none' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                  <FontAwesomeIcon icon={eyeslash ? faEye : faEyeSlash} className='pt-2' onClick={eyehandler} />
                </div>
              </div>
              <div className='flex justify-between text-[12px]'>
                <p><input type="checkbox" className='mr-1' />Keep me logged In</p>
                <a className='text-green-700 font-bold'>Forgot Password?</a>
              </div>
              <button className='bg-[rgb(0,155,93)] text-white w-full h-10 rounded-lg text-sm font-bold my-3'>Sign Up</button>
              <p className='text-[12px] text-center'>Already have an account? <button type="button" className='text-green-700 font-bold' onClick={togglesignup}>login</button></p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
