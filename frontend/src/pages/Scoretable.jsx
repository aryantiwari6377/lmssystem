// import React, { useEffect, useState } from 'react'
// import {userscore} from '../services/userscore';

// function Scoretable() {
//       const [score, setScore] = useState({});

//     const fetchscore = async()=>{
//         try{
//       const res = await userscore();
//       console.log("on main page",res);
//       if(res){
//         setScore(res.user);
//         console.log("state is",score);
//       }
//     }
//     catch(error){
//         throw new Error(error);
//     }
      
// }

// useEffect(()=>{
//     fetchscore();
// },[])

//   return (
//     <div>
//           <div className='w-[50%]'>
//             <div className='w-full'>
//             <ul className='flex justify-evenly'>
//                 <li>Test Name</li>
//                 <li>Score</li>
//             </ul>
//             </div>
//             <div className='w-full'>
//                 <ul className='flex justify-evenly'>
//                     <li>verbal</li>
//                      <li>{score.Verbal}</li>
//                 </ul>
//                 <ul className='flex justify-evenly'>
//                     <li>Numerical</li>
//                      <li>{score.Numerical}</li>
//                 </ul>
//                 <ul className='flex justify-evenly'>
//                     <li>Abstract</li>
//                      <li>{score.Abstract}</li>
//                 </ul>
//                 <ul className='flex justify-evenly'>
//                     <li>Personality</li>
//                      <li>{score.Personality}</li>
//                 </ul>
//             </div>
//           </div>
//     </div>
//   )
// }

// export default Scoretable

import React, { useEffect, useState } from 'react';
import { userscore } from '../services/userscore';
import { useNavigate } from 'react-router-dom';
function Scoretable() {
  const [score, setScore] = useState({});
const navigate = useNavigate();
  const fetchscore = async () => {
    try {
      const res = await userscore();
      console.log("on main page", res);
      if (res) {
        setScore(res.user);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchscore();
  }, []);

  return (
    <div className="w-[50%] mx-auto my-12">
      <div className="w-full">
        <ul className="flex justify-between font-bold border-b pb-2 mb-2">
          <li>Test Name</li>
          <li>Score(100)</li>
        </ul>
      </div>
      <div className="w-full">
        <ul className="flex justify-between py-2 border-b">
          <li>Verbal</li>
          <li className={`text-blue-400  ${score.Verbal === -1 ? "underline cursor-pointer" : ""}`} onClick={()=>navigate( score.Verbal === -1 ?  "/testpage" :"")}>{score.Verbal === -1 ? "Take Test" : score.Verbal}</li>
        </ul>
        <ul className="flex justify-between py-2 border-b">
          <li>Numerical</li>
          <li className={`text-blue-400  ${score.Numerical === -1 ? "underline cursor-pointer" : ""}`} onClick={()=>navigate( score.Numerical === -1 ?  "/testpage" :"")}>{score.Numerical === -1 ? "Take Test" : score.Numerical}</li>
        </ul>
        <ul className="flex justify-between py-2 border-b">
          <li>Abstract</li>
          <li className={`text-blue-400  ${score.Abstract === -1 ? "underline cursor-pointer" : ""}`} onClick={()=>navigate( score.Abstract === -1 ?  "/testpage" :"")}>{score.Abstract === -1 ? "Take Test" : score.Abstract}</li>
        </ul>
        <ul className="flex justify-between py-2 border-b">
          <li>Personality</li>
          
          <li className={`text-blue-400  ${score.Personality === -1 ? "underline cursor-pointer" : ""}`} onClick={()=>navigate( score.Personality === -1 ?  "/testpage" :"")}>{score.Personality === -1 ? "Take Test" : score.Personality}</li>
       
        </ul>
      </div>
    </div>
  );
}

export default Scoretable;
