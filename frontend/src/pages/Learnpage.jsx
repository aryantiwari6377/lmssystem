import React from 'react'
import desktop  from '../images/mobileimg.PNG';

import mobileimg from '../images/desktop.PNG';
import { faMagnifying} from '@fortawesome/free-solid-svg-icons';

function LearnPage() {
  return (
    <div>
        <div className='text-center mt-10'>
       <h1 className=' font-bold text-[24px] text-[rgb(45,57,65)] mb-5'>Free Online Courses With Certificates & Diplomas</h1>
       </div>
         {/* <input placeholder='&#128269; What you want to learn today?' className='border bp-1 rounded-md h-[40px] w-[340px] text-center my-10'/> */}
         <img src={ mobileimg}/>
    </div>
  )
}

export default LearnPage