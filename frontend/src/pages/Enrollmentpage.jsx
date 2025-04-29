// import React, { useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
// import { enrollment } from '../services/enrollment';

// function Enrollmentpage() {
//           const {courseid} = useParams();
//           const[email, setEmail] = useState("");
//           const navigate = useNavigate();
//          console.log("is check",courseid);
//           const formhandle =async (e) =>{
//             try{
//               e.preventDefault();
//                   const response  = await enrollment(email, courseid);

//                   if(response){
//                          navigate(`/coursepage/${courseid}`);
//                   }
//                 }
//                 catch(error){
//                    throw new Error(error);
//                 }
//           }
          
//   return (
//     <div>
//             <form onSubmit={formhandle}>
//               <div className=''>
//                   <label className='mr-2'>Email</label>
//                   <input type="text" className='border-2 border-black' onChange={(e)=>{setEmail(e.target.value)}}/>
//                   </div>
//                   <button className='bg-gray-600 text-white font-bold px-2 rounded-md mt-4' type="submit">submit</button>
//             </form>

//     </div>
//   )
// }

// export default Enrollmentpage
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { enrollment } from '../services/enrollment';

function Enrollmentpage() {
          const {id} = useParams();
          const[email, setEmail] = useState("");
          const navigate = useNavigate();
         console.log("is check",id);
          const formhandle =async (e) =>{
            try{
              e.preventDefault();
                  const response  = await enrollment(email, id);

                  if(response){
                         navigate(`/coursepage/${id}`);
                  }
                }
                catch(error){
                   throw new Error(error);
                }
          }
          
  return (
    <div>
            <form onSubmit={formhandle}>
              <div className=''>
                  <label className='mr-2'>Email</label>
                  <input type="text" className='border-2 border-black' onChange={(e)=>{setEmail(e.target.value)}}/>
                  </div>
                  <button className='bg-gray-600 text-white font-bold px-2 rounded-md mt-4' type="submit">submit</button>
            </form>

    </div>
  )
}

export default Enrollmentpage