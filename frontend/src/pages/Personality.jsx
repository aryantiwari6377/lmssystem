
import React from 'react';

import personalitybanner from '../images/personalitybanner.jpg';
import personality1 from '../images/personality1.PNG'
import personality2 from '../images/personality2.PNG'
import personality3 from '../images/personality3.PNG'
import benoifit1 from '../images/benifit5.PNG';
import benoifit2 from '../images/benifit1.PNG';
import benoifit3 from '../images/benifit2.PNG';
import benoifit4 from '../images/benifit3.PNG';
import benoifit5 from '../images/benifit4.PNG';
import { useNavigate } from 'react-router-dom';

function Personality() {
    const navigate = useNavigate();

  return (
    <div>
         <div className='pl-[25%] bg-black'><img src={personalitybanner} className=''/></div>
         <div className='py-3 bg-[rgb(243,243,243)] p-3'>
            <h1 className='text-[rgb(70,81,89)] text-4xl font-bold '>Understand Who You Truly Are - With Our DISC Personality Assessment</h1>
            <p className='text-md my-6'> Designed by expert psychologists, Alison’s free Workplace Personality Assessment enables you to realise your career dreams by providing you with an extremely accurate report of who you are and why you do things the way you do. </p>
             <button className='bg-[rgb(131,193,36)] text-white p-2 rounded-full' onClick={()=>{navigate('/testpage');}}>Start Your Free Personality Assessment</button>
         </div>
         <div className='flex flex-col gap-y-6 mt-10'>
         <div className='md:w-[80%] md:ml-[10%] p-3 shadow-2xl text-center text-sm'>
            <img src={personality1} className='md:ml-40 ml-[32%]'/>
            <span>Discover your professional</span><span className='text-[rgb(131,193,36)]'>strengths and weaknesses</span>
         </div>
         <div className='md:w-[80%] md:ml-[10%] p-3 shadow-2xl text-center text-sm'>
            <img src={ personality2} className='md:ml-40 ml-[32%]'/>
            <span>get</span><span className='text-[rgb(131,193,36)]'>personalised course recommendations  <span>to</span>  <span className='text-[rgb(131,193,36)]'>upskill</span> yourself </span>
         </div>
         <div className='md:w-[80%] md:ml-[10%] p-3 shadow-2xl text-center text-sm'>
            <img src={ personality3} className='md:ml-40 ml-[32%]'/>
            <span>Explore <span className='text-[rgb(131,193,36)]'>careers that match your personality, </span>your <span className='text-[rgb(131,193,36)]'>strengths</span>and your <span className='text-[rgb(131,193,36)]'>interests</span></span>
         </div>
         </div>


         <div className='mt-20'>

            <h1 className='text-[rgb(70,81,89)] text-3xl ml-4 md:ml-6 font-bold' onClick={()=>{navigate('/testpage');}}>Benefits of taking Personality Tests</h1>
            <div className='m-10 flex flex-col gap-y-6 md:gap-y-0 md:flex-row  md:m-10  gap-x-4 w-[90%] justify-between lg:w-[74%] lg:ml-[13%]'>
                <div className='pl-[24%] md:pl-0'>
                    <img src={benoifit1} />
                <p className='font-bold'> Know Your Best Self </p>
                </div>

                <div className='pl-[24%] md:pl-0'>
                    <img src={benoifit2}/>
                    <p className='font-bold'> Find your purpose </p>
                </div>

                <div className='pl-[24%] md:pl-0'>
                    <img src={benoifit3}/>
                    <p className='font-bold'> Achieve your goals </p>
                </div>

                <div className='pl-[24%] md:pl-0'>
                    <img src={benoifit4}/>
                    <p className='font-bold'> Increase your confidence </p>
                </div>

                <div className='pl-[24%] md:pl-0'>
                    <img src={benoifit5}/>
                    <p className='font-bold'> Progress in your career </p>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Personality