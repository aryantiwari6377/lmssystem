import React, { useState } from 'react'
import { emailpassword } from '../services/emailpassword';
import { useNavigate } from 'react-router-dom';

function Emailpage() {
      const navigate = useNavigate();   
     const [email, setEmail] = useState("");
        
     const handleform = ()=>{
           const response = emailpassword(email);
           if(response === 200){
              console.log("link sended");
              alert("link sended");
              navigate("/");
           }
     }

  return (

    <div className='p-24 '>
         <form onSubmit={handleform} className='w-[250px] h-[160px]  rounded-2xl mx-auto'>
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} className='mt-3 rounded-xl w-[300px] outline-none h-[32px] bg-[rgb(247,180,0)] text-black font-bold' placeholder='enter email'/>
            <button className='bg-black text-white font-bold block px-3 py-1 mx-auto mt-4 rounded-md'>Submit</button>
         </form>
    </div>
  )
}

export default Emailpage