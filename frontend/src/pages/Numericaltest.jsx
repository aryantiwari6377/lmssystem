import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion,  faClock,  faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Verbaltest() {
  const navigate = useNavigate();

  return (
  
        <div className='md:flex '>
        <div className='md:w-1/2 ml-3 md:ml-8'>
            <h2 className='font-bold text-3xl mb-3'>Numerical Reasoning Test</h2>
        <p className='items-center'>Our Numerical Reasoning Test (or Math Aptitude Test) will help you gauge your ability to understand and analyse numerical information. Numerical reasoning skills enable you to solve problems, interpret and analyse data presented in various formats, and draw logical conclusions. This aptitude is critical across multiple fields and is an essential everyday skill. Once you have taken this assessment, you should complete the Verbal and Abstract Reasoning assessments as well. </p>
          <div className='flex my-10'>
                    <div className='w-[60%] flex gap-x-2'><div className='bg-[rgb(224,244,249)] w-9 h-9 rounded-full p-2'><FontAwesomeIcon icon={faQuestion} className='text-[rgb(0,129,182)] text-xl'/></div><div><span className='font-bold'>28</span><p className='text-sm'>questions</p></div></div>
                    <div className='w-[60%] flex gap-x-2'><div className='bg-[rgb(224,244,249)] w-9 h-9 rounded-full p-2'><FontAwesomeIcon icon={faClock} className='text-[rgb(0,129,182)] text-xl'/></div><div><span className='font-bold'>10 min</span><p className='text-sm'>Time</p></div></div>
                    <div className='w-[60%] flex gap-x-2'><div className='bg-[rgb(224,244,249)] w-9 h-9 rounded-full p-2'><FontAwesomeIcon icon={faGlobe} className='text-[rgb(0,129,182)] text-xl'/></div><div><span className='font-bold'>English</span><p className='text-sm'>Language</p></div></div>
           </div>
           <button className='bg-[rgb(0,155,93)] text-white p-3 rounded-xl md:w-60 md:ml-12' onClick={()=>{navigate('/testpage')}}>Start Test For Free</button>
        </div>


        {/* <div>
            slider
        </div> */}
         <div className='bg-[rgb(224,244,249)]'></div>
    </div>
  )
}

export default Verbaltest