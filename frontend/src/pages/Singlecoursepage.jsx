import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {enrollverify} from '../services/verifyenroll';

function Singlecoursepage() {
  const { id } = useParams();
  console.log("id is ",id);
  const courses = useSelector((state) => state.courses.course);
  const [activeoption, setActiveOption] = useState("learn");
  const [coursedetail, setCourseDetail] = useState(null);
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate();
  const [isEnroll, setisEnroll] = useState(false);

  useEffect(() => {
    const foundCourse = courses.find((course) => course._id === id);
    if (foundCourse) {
      setCourseDetail(foundCourse);
      setLoading(false); 
    }
  }, [courses, id]); 

   

    useEffect(() => {
      const verifyEnrollment = async () => {
        const response = await enrollverify(id);
        if (response.status === 200) {
          setisEnroll(true);
        }
        else if(response.status === 404){
          alert('not enrolle in this course');
        }
      };
    
      verifyEnrollment();
    }, [id]);
    
      
     

  if (loading) {
    return <p>Loading course details...</p>;
  }

  if (!coursedetail) {
    return <p>Course not found.</p>;
  }

  return (
    <div className=' '>
      <div className='md:h-60 w-full mx-2 md:flex md:gap-x-[2%]  p-4 mt-3'>
        <div className='items-center w-[48%] md:h-full'>
          <iframe
            src="https://www.youtube.com/embed/5MgBikgcWnY"
            frameborder="0"
            className='w-[90%] h-full'
          ></iframe>
        </div>
        <div className='text-start md:h-full flex flex-col gap-y-2 text-xl pt-6'>
          <h1 className='text-3xl font-bold'>
            {coursedetail.title} 
          </h1>
          <div className='text-xl '>
            <p>{coursedetail.review}</p>
            <p>{coursedetail.duration}</p>
            <p className='font-bold text-gray-600'>
              {coursedetail.status}
            </p>
            <button className={`h-8 font-bold text-[16px] text-white bg-gray-600 text-center px-3 rounded ${isEnroll ? 'hidden' : 'block'}`} onClick={()=>{navigate(`/enrollmentform/${id}`)}}>
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      <div className='w-[60%] mt-8 mx-auto'>
        <ul className='flex text-xl justify-evenly'>
          <li
            onClick={() => {
              setActiveOption("learn");
            }}
            className='cursor-pointer'
          >
            What you'll learn
          </li>
          <li
            onClick={() => {
              setActiveOption("content");
            }}
            className='cursor-pointer'
          >
            Course Content
          </li>
          <li
            onClick={() => {
              setActiveOption("review");
            }}
            className='cursor-pointer'
          >
            Review
          </li>
          <li
           
            className='cursor-pointer'
          >
            Documentation
          </li>
        </ul>
      </div>

      <div className='mx-8 mt-6 py-4'>
        {activeoption === "learn" && (
          <div className='py-6 flex flex-col gap-y-3'>
            <h2 className='font-bold text-start'>What You'll Learn</h2>
            <ul className='flex flex-col gap-y-1 text-start list-disc'>
              {coursedetail.learn.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
              <li>
                Understand the structure of a webpage with HTML, and style your
                pages with CSS to make them visually appealing.
              </li>
              <li>
                Learn to create websites that adapt to any screen size,
                ensuring a seamless experience on both mobile and desktop
                devices.
              </li>
              <li>
                Master the basics of JavaScript, the programming language that
                brings interactivity to web pages.
              </li>
              <li>
                Explore advanced JavaScript concepts, including ES6 features
                like arrow functions, destructuring, and modules.
              </li>
              <li>
                Build dynamic and responsive user interfaces with React, one of
                the most popular JavaScript frameworks.
              </li>
              <li>
                Use Git to manage your code and collaborate with others on
                GitHub, a vital skill in any development team.
              </li>
            </ul>
          </div>
        )}

        {activeoption === "content" && (
          <div className='flex flex-col gap-y-6'>
            <div className='flex flex-col gap-y-4'>
              <h2 className='font-bold text-start'> Course Overview:</h2>
              <p className='text-start'>
                {coursedetail.content}
                This immersive Web Development Bootcamp is designed to transform
                beginners into confident, job-ready web developers. Covering
                everything from foundational skills to advanced techniques, this
                course provides a deep understanding of both frontend and backend
                development. Through hands-on projects, real-world examples, and
                expert guidance, you’ll acquire the skills needed to build, design,
                and deploy dynamic web applications.
              </p>
            </div>
            <div className='flex flex-col gap-y-4'>
              <h2 className='font-bold text-start'>Who Is This Course For?</h2>
              <p className='text-start'>
                {coursedetail.targetAudience}
                This course is perfect for anyone with a desire to learn web
                development, whether you're a complete beginner, a self-taught coder
                looking to formalize your skills, or someone seeking a career change
                into tech. No prior coding experience is required – just a willingness
                to learn and explore.
              </p>
            </div>
          </div>
        )}

        {activeoption === "review" && (
          <div>
            <p>{coursedetail.reviews} review</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Singlecoursepage;
