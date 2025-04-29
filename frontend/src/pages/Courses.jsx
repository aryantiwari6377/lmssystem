
import React from 'react'

import It from '../images/itimg.PNG';
import health from '../images/healthimg.PNG';
import language from '../images/languageimg.PNG';
import business from '../images/businessimg.PNG';
import management from '../images/managementimg.PNG';

import personaldev from '../images/personaldevelopmentimg.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from "react-router-dom"

function  Courses() {
    const navigate = useNavigate();

    const itcourse = (category) =>{
        navigate(`/itcoursepage/${category}`);

    }

  return (
   <div className='bg-[rgb(89,175,99)] pt-8 pb-8'>
     <h1 className='text-2xl text-white text-center'>Explore 5,000+ Free Courses</h1>

     <div className=' w-[90%] ml-[5%] pl-[25%] sm:pl-0 pt-8 flex flex-wrap gap-3   md:gap-6 md:w-[60%] md:ml-[25%]'>
    <div className='flex cursor-pointer  bg-[rgb(255,255,255)] w-[180px] justify-between p-2 h-[90px] rounded-md py-5' onClick={()=>{itcourse('It')} }>
        <div className='h-[30px] w-[30px] pt-1'><img src={It}/></div>
        <div className=''>
        <p className='font-bold'>IT</p>
        <div className='flex gap-x-2 text-sm'><span>1,139</span><span>Courses</span><FontAwesomeIcon icon={faArrowRight} className='text-green-400'/></div>
        
        </div>
    </div>
    <div className='flex cursor-pointer bg-[rgb(255,255,255)] w-[180px] justify-between p-2 h-[90px] rounded-md py-5' onClick={()=>{itcourse('Health')}}>
        <div className='h-[30px] w-[30px] pt-1'><img src={health}/></div>
        <div className=''>
        <p className='font-bold'>Health</p>
        <div className='flex gap-x-2 text-sm'><span>1,139</span><span>Courses</span><FontAwesomeIcon icon={faArrowRight} className='text-green-400'/></div>
        </div>
    </div>
    <div className='flex cursor-pointer  bg-[rgb(255,255,255)] w-[180px] justify-between p-2 h-[90px] rounded-md py-5' onClick={()=>{itcourse('Language')}}>
        <div className='h-[30px] w-[30px] pt-1'><img src={language}/></div>
        <div className=''>
        <p className='font-bold'>Language</p>
        <div className='flex gap-x-2 text-sm'><span>1,139</span><span>Courses</span><FontAwesomeIcon icon={faArrowRight} className='text-green-400'/></div>
        </div>
    </div>
    <div className='flex cursor-pointer  bg-[rgb(255,255,255)] w-[180px] justify-between p-2 h-[90px] rounded-md py-5' onClick={()=>{itcourse('Business')}}>
        <div className='h-[30px] w-[30px] pt-1'><img src={business}/></div>
        <div className=''>
        <p className='font-bold'>Business</p>
        <div className='flex gap-x-2 text-sm'><span>1,139</span><span>Courses</span><FontAwesomeIcon icon={faArrowRight} className='text-green-400'/></div>
        </div>
    </div>
    <div className='flex cursor-pointer  bg-[rgb(255,255,255)] w-[180px] justify-between p-2 h-[90px] rounded-md py-5' onClick={()=>{itcourse('Management')}}>
        <div className='h-[30px] w-[30px] pt-1'><img src={management}/></div>
        <div className=''>
        <p className='font-bold'>Management</p>
        <div className='flex gap-x-2 text-sm'><span>1,139</span><span>Courses</span><FontAwesomeIcon icon={faArrowRight} className='text-green-400'/></div>
        </div>
    </div>
    <div className='flex cursor-pointer  bg-[rgb(255,255,255)] w-[180px] justify-between p-2 h-[90px] rounded-md py-5' onClick={()=>{itcourse('English')}}>
        <div className='h-[30px] w-[30px] pt-1'><img src={It}/></div>
        <div className=''>
        <p className='font-bold'>English</p>
        <div className='flex gap-x-2 text-sm'><span>1,139</span><span>Courses</span><FontAwesomeIcon icon={faArrowRight} className='text-green-400'/></div>
        </div>
    </div>
    <div className='flex cursor-pointer  bg-[rgb(255,255,255)] w-[180px] justify-between p-2 h-[90px] rounded-md py-5' onClick={()=>{itcourse('personal development')}}>
        <div className='h-[30px] w-[30px] pt-1'><img src={personaldev}/></div>
        <div className=''>
        <p className='font-bold'>Personal Development</p>
        <div className='flex gap-x-2 text-sm'><span>1,139</span><span>Courses</span><FontAwesomeIcon icon={faArrowRight} className='text-green-400'/></div>
        </div>
    </div>
    <div className='flex cursor-pointer  bg-[rgb(255,255,255)] w-[180px] justify-between p-2 h-[90px] rounded-md py-5' onClick={()=>{itcourse('sales & marketing')}}>
        <div className='h-[30px] w-[30px] pt-1'><img src={It}/></div>
        <div className=''>
        <p className='font-bold'>Sales & Marketing</p>
        <div className='flex gap-x-2 text-sm'><span>1,139</span><span>Courses</span><FontAwesomeIcon icon={faArrowRight} className='text-green-400'/></div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Courses;
