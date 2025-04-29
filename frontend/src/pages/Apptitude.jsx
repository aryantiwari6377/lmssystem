
import React,{useEffect} from 'react'

import aptitudetext from '../images/aptitudetest.PNG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple, faDesktop, faPuzzlePiece, faClock, faQuestion } from '@fortawesome/free-solid-svg-icons';
// import verbal from '../images/aptitude_processed.png';
// import numerical from '../images/aptitude_processed 1.png';
// import abstract from '../images/aptitude_processed 2.png';
// import verbal from '../images/itimg.png';
import apt1 from '../images/apti1.png';
import apt2 from '../images/apti2.png';
import apt3 from '../images/apti3.png';
import {useNavigate} from "react-router-dom";

function Apptitude() {
     const navigate = useNavigate();

     const handleverbal = () =>{
        navigate('/verbaltest');
     } 
     
     const handlenumerical = () =>{
        navigate('/numericaltest');
     } 
     
    
     const handleabstract = () =>{
        navigate('/abstracttest');
     } 

     useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    

  return (
    <div>
    <div className='m-12 mb-0 flex flex-col gap-y-10'>
        <div>
        <div className='w-[93%] md:w-[58%] text-center'><h3 className='text-xl font-bold md:text-3xl font-black md:leading-10'>Show Employers  You're Truly Ready For<br/> The  Job With <sapn className='text-[rgb(0,145,199)] block'>Alison's Aptitude Test</sapn></h3></div> 
        </div>
        <div className='md:flex'>
            <div className='md:w-[60%]'>
            <p className='text-sm'> Our free online Aptitude Test will help you quickly demonstrate your skills to employers in today's competitive job market. It tests you on a range of abilities that employers value worldwide. This will give you a head start on the road to your next job or promotion! </p>
            <button className='bg-green-700 text-white py-2 px-2 md:px-4 rounded-xl my-8' onClick={()=>{navigate('/testpage');}}> Assess Your Aptitude For Free Now </button>
            </div>

            <div className='h-[240px]'>
            <img src={aptitudetext} className='h-full'/>
            </div>
        </div>
    </div>

    <div className='bg-[rgb(0,81,130)] p-8'>
        <div className='md:w-[38%] flex flex-col gap-y-4'>
        <div className='flex gap-x-4'><div className='bg-[rgb(11,36,65)] text-white rounded-full w-8 h-8 p-2'><FontAwesomeIcon icon={ faChartSimple} /></div><p className='text-white text-start text-sm'> Showcase your aptitude & ability  to potential employers </p></div>
        <div className='flex gap-x-4'><div className='bg-[rgb(11,36,65)] text-white rounded-full w-8 h-8 p-2'><FontAwesomeIcon icon={ faDesktop} /></div><p  className='text-white text-start text-sm'>Practice  the test before interviews & prepare for  future job opportunities</p></div>
        <div className='flex gap-x-4'><div className='bg-[rgb(11,36,65)] text-white rounded-full w-8 h-8 p-2'><FontAwesomeIcon icon={ faPuzzlePiece } /></div><p  className='text-white text-start text-sm'>Upskill and improve your score with free course recommendations</p> </div>
       </div>
    </div>
          
      <div className='m-10'>
        <h3 className='font-extrabold text-3xl my-3 '> Take Our Expert-Approved Aptitude Test </h3>
         <p> Our free career Aptitude Test is validated by experts and recognised by employers. It provides you with an <span className='font-bold'> in-depth understanding of your ability to think, reason and analyse. </span> The test consists of three assessments - Verbal, Numerical and Abstract reasoning which you can complete to  <span className='font-bold'>discover how prepared you are for the job market  and to showcase your skills.</span></p>
          <div className='md:flex md:gap-3 md:mt-10 '>
            <div className='shadow-2xl rounded-2xl'>
                <div className='p-2'><img src={apt1} className='h-[100%] w-[100%] rounded-md'/></div>
                <div className='mt-4'>
                    <h2 className='font-bold text-2xl w-[60%] text-center ml-[20%]'>Verbal Reasoning</h2>
                <p className='text-center p-3'> Assess your critical thinking abilities, comprehension, and attention to detail. This skill is essential for jobs involving written and oral communication. </p>
                </div>
                <div className='flex'>
                    <div className='w-[60%] flex gap-x-2'><div className='bg-[rgb(224,244,249)] w-9 h-9 rounded-full p-2'><FontAwesomeIcon icon={faQuestion} className='text-[rgb(0,129,182)] text-xl'/></div><div><span className='font-bold'>28</span><p className='text-sm'>questions</p></div></div>
                    <div className='w-[60%] flex gap-x-2'><div className='bg-[rgb(224,244,249)] w-9 h-9 rounded-full p-2'><FontAwesomeIcon icon={faClock} className='text-[rgb(0,129,182)] text-xl'/></div><div><span className='font-bold'>10</span> <p className='font-bold inline md:block'>min</p><p className='text-sm'>Time</p></div></div>
                </div>
                <button className='w-full bg-green-700 text-white rounded-xl text-md mt-10 mb-4 p-3' onClick={handleverbal}>Access  Your Verbal Reasoning</button>
            </div>

            <div className='shadow-2xl rounded-2xl'>
                <div  className='p-2 md:h-[250px] lg:h-[370px]'><img src={apt2} className='h-[100%] w-[100%] rounded-md'/></div>
                <div className='mt-4'>
                    <h2  className='font-bold text-2xl w-[64%] text-center ml-[20%]'>Numerical Reasoning</h2>
                <p className='text-center p-3'>  Assess your ability to analyse and draw logical conclusions from numerical data. This skill is crucial in making business decisions based on numerical evidence.  </p>
                </div>
                <div className='flex md:mt-3 lg:mt-0'>
                    <div className='w-[60%] flex gap-x-2'><div className='bg-[rgb(224,244,249)] w-9 h-9 rounded-full p-2'><FontAwesomeIcon icon={faQuestion} className='text-[rgb(0,129,182)] text-xl'/></div><div><span className='font-bold'>28</span><p className='text-sm'>questions</p></div></div>
                    <div className='w-[60%] flex gap-x-2'><div className='bg-[rgb(224,244,249)] w-9 h-9 rounded-full p-2'><FontAwesomeIcon icon={faClock} className='text-[rgb(0,129,182)] text-xl'/></div><div><span className='font-bold'>10</span> <p className='font-bold inline md:block'>min</p><p className='text-sm'>Time</p></div></div>
                </div>
                <button className='w-full bg-green-700 text-white rounded-xl text-md mt-10 mb-4 p-3' onClick={handlenumerical}>Access  Your Numerical Reasoning</button>
            </div>
            <div className='shadow-2xl rounded-2xl'>
                <div  className='p-2 md:h-[250px]  lg:h-[370px]'><img src={apt3} className='w-[100%] h-[100%] rounded-md'/></div>
                <div className='mt-4'>
                    <h2  className='font-bold text-2xl w-[60%] text-center ml-[20%]'>Abstract Reasoning</h2>
                <p className='text-center p-3'>  Assess your ability to think outside the box and examine logical problems. This skill is essential for jobs involving innovation and creative decision-making. </p>
                </div>
                <div className='flex'>
                    <div className='w-[60%] flex gap-x-2'><div className='bg-[rgb(224,244,249)] w-9 h-9 rounded-full p-2'><FontAwesomeIcon icon={faQuestion} className='text-[rgb(0,129,182)] text-xl'/></div><div><span className='font-bold'>28</span><p className='text-sm'>questions</p></div></div>
                    <div className='w-[60%] flex gap-x-2'><div className='bg-[rgb(224,244,249)] w-9 h-9 rounded-full p-2'><FontAwesomeIcon icon={faClock} className='text-[rgb(0,129,182)] text-xl'/></div><div><span className='font-bold'>10</span> <p className='font-bold inline md:block'>min</p><p className='text-sm'>Time</p></div></div>
                </div>
                <button className='w-full bg-green-700 text-white rounded-xl text-md mt-10 mb-4 p-3' onClick={handleabstract}>Access  Your Abstract Reasoning</button>
            </div>
            </div>
      </div>



    </div>
  )
}

export default Apptitude