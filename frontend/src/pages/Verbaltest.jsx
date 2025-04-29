import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion,  faClock,  faGlobe } from '@fortawesome/free-solid-svg-icons';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

import { useNavigate } from 'react-router-dom';

function Verbaltest() {

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
// //     autoplay: true,            // Enables auto sliding
// // autoplaySpeed: 2000,     
// // arrows: true,  
//   };
       
       const navigate = useNavigate();
  return (
    <div className='md:flex '>
        <div className='md:w-1/2 ml-3 md:ml-8'>
            <h2 className='font-bold text-3xl mb-3'>Verbal Reasoning Test</h2>
        <p className='items-center'> Alison's Verbal Reasoning Test will help you gauge your ability to understand and analyse language, draw conclusions and make inferences. Verbal reasoning skills enable you to communicate effectively and articulate your thoughts persuasively. This aptitude is critical across multiple fields and is an essential everyday skill. Once you have taken this assessment, you should complete the Numerical and Abstract Reasoning assessments as well.  </p>
          <div className='flex my-10'>
                    <div className='w-[60%] flex gap-x-2'><div className='bg-[rgb(224,244,249)] w-9 h-9 rounded-full p-2'><FontAwesomeIcon icon={faQuestion} className='text-[rgb(0,129,182)] text-xl'/></div><div><span className='font-bold'>28</span><p className='text-sm'>questions</p></div></div>
                    <div className='w-[60%] flex gap-x-2'><div className='bg-[rgb(224,244,249)] w-9 h-9 rounded-full p-2'><FontAwesomeIcon icon={faClock} className='text-[rgb(0,129,182)] text-xl'/></div><div><span className='font-bold'>10 min</span><p className='text-sm'>Time</p></div></div>
                    <div className='w-[60%] flex gap-x-2'><div className='bg-[rgb(224,244,249)] w-9 h-9 rounded-full p-2'><FontAwesomeIcon icon={faGlobe} className='text-[rgb(0,129,182)] text-xl'/></div><div><span className='font-bold'>English</span><p className='text-sm'>Language</p></div></div>
           </div>
           <button className='bg-[rgb(0,155,93)] text-white p-3 rounded-xl md:w-60 md:ml-12' onClick={()=>{navigate('/testpage')}}>Start Test For Free</button>
        </div>

        <div className='bg-[rgb(224,244,249)]'>
      
        {/* <Slider {...settings}>
            <div >
           <Image src={s1} className='w-[180px] h-[200px] ml-[40%]'/> 
          <p>Alison is your best career development partner, one that understands your busy schedule, walks with you at your pace, and accommodates that into your training.</p>
           <div className='flex '><p> Laban Mtware </p><p>Social Change Agent</p><span className='text-yellow-500'> ★ ★ ★ ★ ★</span></div>
            </div>
            <div>
            <img src={s1} className='w-[180px] h-[200px] ml-[40%]'/>
            <p>I heartily recommended Alison to a number of family members and friends because it was extremely helpful for my career.</p>
            <div className='flex '><p> Laban Mtware </p><p>Social Change Agent</p><span className='text-yellow-500'> ★ ★ ★ ★ ★</span></div>
            </div>
            <div>
            <img src={s1} className='w-[180px] h-[200px] ml-[40%]'/>
             <p>I would definitely recommend Alison because it has helped me in developing my skills and improved my ability to do more in terms of managing technical projects.</p>
             <div className='flex '><p> Laban Mtware </p><p>Social Change Agent</p><span className='text-yellow-500'> ★ ★ ★ ★ ★</span></div>
            </div>
            <div>
            <img src={s1} className='w-[180px] h-[200px] ml-[40%]'/>
            <p>I tell my friends that Alison is the best app to spend your free time on. I recommend it because it's free of charge.</p>
            <div className='flex '><p> Laban Mtware </p><p>Social Change Agent</p><span className='text-yellow-500'> ★ ★ ★ ★ ★</span></div>
            </div>
            <div>
             <img src={s1} className='w-[180px] h-[200px] ml-[40%]'/> 
            <p>I would definitely recommend Alison because the courses are effective and financially affordable to everyone.</p>
            <div className='flex '><p> Laban Mtware </p><p>Social Change Agent</p><span className='text-yellow-500'> ★ ★ ★ ★ ★</span></div>
            </div>
          </Slider> */}
        </div>

    </div>
  )
}

export default Verbaltest