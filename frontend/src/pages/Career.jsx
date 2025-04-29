
import React from 'react';

import career from '../images/careercardimg1.png';
import aptitude from '../images/apttitudeimg_processed.jpg';
import strength from '../images/strengthsweaknessescardimg3.png';
import skill from '../images/showskillcardimg2_processed.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from 'react-router-dom';
import earn1 from '../images/earn1.png';
import Catnavbar from '../Components/Catnavbar';
import Footer from '../Components/Footer';




function Career() {
    const navigate = useNavigate(); 
    const islogin = localStorage.getItem('token');
 
    const handleRedirect = () => {
        if(islogin ){
        navigate('/apptitudepage'); 
        }
        else{
            navigate('/login');  
        }
    };
  
    const handlepersonality = () => {
        if(islogin){
        navigate('/personality'); 
        }
        else{
            navigate('/login');  
        }
    };

    const handlecourses =()=>{
        if(islogin){
        navigate('/coursepage');
        }
        else{
            navigate('/login');  
        }
    }

    return (
        <div>       
              <Catnavbar/>
            <div className='text-center font-bold pt-10 lg:text-[28px] text-[24px]  '>
                <h2 className='text-[rgb(45,57,65)]'>Build Your Career in <span className='text-[rgb(0,145,199)] block lg:inline'>3 Easy Steps</span></h2>
            </div>
            <div className='hidden lg:block lg:flex  gap-x-2 w-[70%] ml-[24%] mt-10'>
                <div className='h-14 w-14 rounded-full border-4 border-[rgb(0,145,199)] text-3xl text-center font-bold text-[rgb(0,145,199)] py-2'>1</div><span className='text-4xl text-[rgb(0,145,199)]'>- - - - - - - - - - -</span>
                <div className='h-14 w-14 rounded-full border-4 border-[rgb(0,145,199)] text-3xl text-center font-bold text-[rgb(0,145,199)] py-2'>2</div><span className='text-4xl text-[rgb(0,145,199)]'>- - - - - - - - - - -</span>
                <div className='h-14 w-14 rounded-full border-4 border-[rgb(0,145,199)] text-3xl text-center font-bold text-[rgb(0,145,199)] py-2'>3</div>
            </div>
            <div className='flex flex-col gap-y-10 py-8 items-center  lg:flex-row lg:gap-x-8 lg:ml-[19%]'>
                <div className='flex gap-2 shadow-2xl p-2 rounded-[16px] w-[306px]  h-[96px]  lg:w-[240px] lg:h-[250px]  lg:flex-col lg:gap-y-4 cursor-pointer' onClick={ handleRedirect}>
                 
                    <div className='w-[70px] h-[70px] lg:h-[50%] lg:w-[90%] lg:ml-[5%]'> <img src={skill} className='h-[100%] w-[100%] lg:w-[60%] lg:h-[80%] rounded-[12px] lg:ml-[20%] lg:mt-[20px]' /></div>
                    <div className='w-[220px] font-bold lg:text-center lg:w-auto flex justify-center items-center lg:text-[15px] lg:p-2'><p className='lg:hidden lg:'>Showcase your strongest skills</p><p className='hidden lg:block'>Showcase your strongest skills by  taking  the Alison  <span>Aptitude Test</span></p><FontAwesomeIcon icon={faArrowRight} className='lg:hidden' /></div>
                
                </div>
          
                <div className='flex gap-2 shadow-2xl p-2 rounded-[16px] w-[306px] h-[96px]  lg:h-[250px] lg:w-[240px]  lg:flex-col lg:gap-y-4 cursor-pointer' onClick={handlepersonality}>
               
                    <div className='w-[70px] h-[70px] lg:h-[50%] lg:w-[90%] lg:ml-[5%]'><img src={strength} className='h-[100%] w-[100%] lg:w-[60%] lg:h-[80%] rounded-[12px] lg:ml-[20%] lg:mt-[20px]' /></div>
                    <div className='w-[220px] font-bold lg:text-center lg:w-auto flex justify-center items-center lg:text-[15px] lg:p-2'><p className='lg:hidden'>Discover your strengths and weaknesses</p><p className='hidden lg:block'>Discover  your strengths with Alisons Workplace Personality Assessment </p><FontAwesomeIcon icon={faArrowRight} className='lg:hidden'/></div>
                   
                </div>
                 
                <div className='flex gap-2 shadow-2xl p-2 rounded-[16px] w-[306px] h-[96px]  lg:h-[250px] lg:w-[240px]  lg:flex-col lg:gap-y-4 cursor-pointer' onClick={handlecourses}> 

                    <div className='w-[70px] h-[70px] lg:h-[50%] lg:w-[90%] lg:ml-[5%]'><img src={career} className='h-[100%] w-[100%] lg:w-[60%] lg:h-[80%] rounded-[12px] lg:ml-[20%] lg:mt-[20px]' /></div>
                    <div className='w-[220px] font-bold lg:text-center lg:w-auto flex justify-center items-center lg:text-[15px] lg:p-2'><p className='lg:hidden'>Explore 1000+ careers and Courses</p><p className='hidden lg:block'><p>Find  your perfect career.</p><p>Explore 1000+ career paths with related courses</p></p><FontAwesomeIcon icon={faArrowRight} className='lg:hidden'/></div>
                 
                </div>
                 

            </div>

            <div className='bg-[rgb(237,245,228)] p-4'>
                <h2 className='my-6 lg:my-0 font-bold text-2xl text-center' > Assess Your Aptitude Before Your Future Employers Do</h2>
                <div className='md:w-[50%] md:ml-[25%] lg:w-[30%] lg:ml-[35%]'>
                <img src={aptitude} className='w-[90%] ml-[5%] lg:w-full lg:ml-0 lg:mt-4'/>
                <p className='p-4 text-center'>
                Our free Aptitude Test is validated by experts and recognised by employers. Take it now to get an in-depth understanding of your Verbal, Numerical and Abstract reasoning skills, and know where you stand compared to others. 
                </p>
                <button className='py-2 px-4 bg-green-700 text-white my-4 lg:my-6 w-full rounded-xl' onClick={()=>{if(islogin){navigate('/apptitudepage');}else{navigate('/login')}}}>Assess Your Aptitude For Free Now</button>
                </div> 
            </div>
     
            
            <div className='p-4'>
                <h2 className='w-full md:w-[50%] md:ml-[25%] my-6 lg:my-0 font-bold text-2xl text-center'>Free Personality Assessment, Understand Who You Truly Are!</h2>
                <div className='md:w-[50%] md:ml-[25%]  lg:w-[30%] lg:ml-[35%]'>
                <img src={aptitude} className='w-[90%] ml-[5%] lg:w-full lg:ml-0 lg:mt-4'/>
                <p className='p-4 text-center'>
                 Alison’s free Workplace Personality Assessment gives you a simple scientific report of your top skills & strengths in just 12 minutes.
                </p>
                <button className='py-2 px-4 bg-green-700 text-white my-4 lg:my-6 w-full rounded-xl' onClick={()=>{if(islogin){navigate('/personality');}else{navigate('/login')}}}>Start Your Free Personality Assessment</button>
                </div> 
            </div>
            
            
            <div className='bg-[rgb(237,245,228)] p-4'>
                <h2 className='w-full md:w-[50%] md:ml-[25%] my-6 lg:my-0 font-bold text-2xl text-center'>Fast Track Your Career With Alison's Career Guide</h2>
                <div className='md:w-[50%] md:ml-[25%]  lg:w-[30%] lg:ml-[35%]'>
                <img src={aptitude} className='w-[90%] ml-[5%] lg:w-full lg:ml-0 lg:mt-4'/>
                <p className='p-4 text-center'>
                From software developer and business manager to head nurse and chef, browse 1000+ exciting careers and the courses you need to
                </p>
                <button className='py-2 px-4 bg-green-700 text-white my-4 lg:my-6 w-[70%] ml-[15%] rounded-xl' onClick={()=>{if(islogin){navigate('/coursepage');} else{navigate('/login')}}}>Discover Careers Now</button>
                </div> 
            </div>
            <Footer/>
        </div>
    )
}

export default Career