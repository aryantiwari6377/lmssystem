import React from 'react'
import { faGraduationCap, faBriefcase,faEarthEurope} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Ratedpage() {
  return (
    <div className='bg-[rgb(11,36,65)] flex flex-col gap-y-4 pt-6 pb-10 mt-10  lg:flex-row  '>
        <div className='flex justify-between text-white w-[70%]  ml-[15%] md:w-[40%] md:ml-[30%]  lg:w-[30%] lg:ml-[10%] lg:text-lg lg:border-r-[1px] lg:border-white lg:px-2'>
            <p className='py-5'>Rated Excellent</p>
          <p  className='py-5'><span className='bg-green-500 text-white'>★</span><span className='bg-green-500 text-white'>★</span><span className='bg-green-500 text-white'>★</span><span className='bg-green-500 text-white'>★</span><span>★</span></p>
          <p  className='py-5'><span className='text-green-500'>★</span><span className='text-sm'>Trustpilot</span></p>
        </div>
        
        <div className='flex justify-between w-auto  px-8 gap-x-4  md:w-[80%] md:ml-[10%] lg:w-1/2 lg:ml-0'>
            <div  className='text-white bg-[rgb(69,88,110)] rounded-[14px] w-[120px] h-[70px] text-sm text-center py-1 lg:bg-[rgb(11,36,65)] lg:flex lg:w-auto  lg:text-lg'>
            <FontAwesomeIcon icon={faGraduationCap } className='lg:py-6'/>
                <p className='lg:py-5'>40 Million+ Learners</p>
            </div>
            <div  className='text-white bg-[rgb(69,88,110)] rounded-[14px] w-[120px] h-[70px] text-sm text-center py-1 lg:bg-[rgb(11,36,65)]  lg:flex lg:w-auto  lg:text-lg'>
            <FontAwesomeIcon icon={faBriefcase } className='lg:py-6'/>
            <p className='lg:py-5'>8 Million+ Graduates</p>
            </div>
            <div  className='text-white bg-[rgb(69,88,110)] rounded-[14px] w-[120px] h-[70px] text-sm text-center py-1 lg:bg-[rgb(11,36,65)]  lg:flex lg:w-auto lg:ml-[5%]  lg:text-lg'>
           
            <FontAwesomeIcon icon={faEarthEurope} className='lg:py-6'/>
            <p className='lg:py-5'>193 Countries</p>
            </div>
        </div>


    </div>
  )
}

export default Ratedpage