import React, { useState } from 'react'
import { resetpassword } from '../services/resetpassword';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Resetpassword() {
  const [newpassword, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
 const token = useParams();
const navigate = useNavigate();

  const handleform = ()=>{
    
    if(confirm !== newpassword){
      alert("password and newpassword not match");
    }
 else{
    const response = resetpassword(newpassword, confirm, token);
    if(response.status===200){
      console.log("password changed");
        alert("password updated");
        navigate("/");
    }
  }
    }
  
  return (
   
    <div className='p-20'>
      <form  onSubmit={handleform} className='w-[280px] h-[160px]  rounded-2xl mx-auto '>
        <div className='flex gap-x-2'>
      <label className='font-bold text-[18px]'>Password:</label>
      <input type="password" onChange={(e)=>{setPassword(e.target.value)}} className='outline-none'/>
      </div>
      <div className='flex mt-6 gap-x-4'>
      <label className='font-bold text-[18px]'>Confirm:</label>
      <input type="password" onChange={(e)=>{setConfirm(e.target.value)}} className='outline-none'/>
      </div>
      <button className='bg-black text-white font-bold block px-3 py-1 mx-auto mt-4 rounded-md'>Submit</button>
      </form>
    </div>
  )
}

export default Resetpassword