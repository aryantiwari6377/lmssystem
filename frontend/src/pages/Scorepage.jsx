import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react'
import { submitscore } from '../services/submitscore';
import {userscore} from '../services/userscore';
import { useParams } from 'react-router-dom';

function Scorepage() {
          const [userScore, setUserScore] = useState("");
          const {category} = useParams();
     
           const Score = async()=>{
             const response = await userscore();
                  console.log("score res is:",response);
             if(response){
               setUserScore(response.user[category]);
             }
           }
  
           useEffect(()=>{
            Score()
           },[]);

  return (
    <div className='flex flex-col gap-y-16 md:gap-y-28 pt-16'>
       <div><h1 className='text-3xl font-bold text-sky-800'>Test Complete!</h1></div>
       <div className='flex flex-col md:flex-row justify-center items-center gap-y-6 md:gap-y-0 gap-x-14'>
           <div className='w-[140px] h-[140px] rounded-full outline outline-sky-700 outline-[4px] font-bold text-2xl flex justify-center items-center'>
              <p>your score</p>
           </div>
           <FontAwesomeIcon icon={faArrowRight} className='rotate-90 md:rotate-0 text-4xl text-sky-700 md:pt-8'/>
           <div className='w-[140px] h-[140px] rounded-full outline outline-sky-700 outline-[4px] font-bold text-2xl flex gap-x-2 justify-center items-center'>
               <p>Score</p><p>{userScore}</p>
           </div>
           <FontAwesomeIcon icon={faArrowRight} className='rotate-90 md:rotate-0 text-4xl text-sky-700 md:pt-8'/>
           <div className='w-[140px] h-[140px] rounded-full outline outline-sky-700 outline-[4px] font-bold text-2xl flex flex-col justify-center items-center'>
              <p>In percentage</p>
              <p>{userScore}%</p>
           </div>
        
       </div>
    </div>
  )
}

export default Scorepage
