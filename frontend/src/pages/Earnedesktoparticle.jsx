import React from 'react'

import familyandfriends from '../images/familyandfriends.PNG';
import teachcarrer from '../images/techcareer.PNG';
import creatorcareer from '../images/creatorcareer.PNG';
import member from '../images/member.PNG';

function Earnedesktoparticle() {
  return (
    <div>
                 <div className="flex justify-around items-center  bg-[rgb(237,245,228)] py-20 px-20">
 
  <div className=" w-[50%]">
    <h2 className="text-3xl font-semibold my-6 ">
      Empower Your Friends & Family By Sharing Free Quality Education
    </h2>
    <p className="text-md my-6">
      Refer your friends, family and social network to Alison and earn free
      Digital Certificates and Digital Diplomas. Refer as many people as you
      want to - the more you refer, the more rewards you unlock!
    </p>
    <button className="text-[15px] font-bold text-white bg-[rgb(0,155,93)] py-3 px-5 rounded-md mx-auto">
      Share And Earn Rewards
    </button>
  </div>
  
  <div className='w-[40%]'><img src={familyandfriends} className=" mx-auto w-[80%] h-[80%]" /></div>
</div>


<div className="flex gap-35 py-20 ">
    <div className='w-[40%] ml-24'><img src={teachcarrer} className="w-[76%]" /></div>
  <div className="w-[40%]">
    <h2 className="text-3xl font-semibold my-6">
    Teach On Alison, Earn Money  & Inspire Millions
    </h2>
    
    <p className="text-md my-6">
    If you are a subject matter expert or a skilled professional who wants to create and publish online courses, then you’ve come to the right place. Share your knowledge with a globalaudience and earn an income through our shared revenue offering. Join our community of Course Creators today!
    </p>
    <button className="text-[15px] font-bold text-white bg-[rgb(0,155,93)] py-3 px-5 rounded-md mx-auto">
      Publish Your Course On Alison
    </button>
  </div>
</div>

<div className="flex justify-center items-center  bg-[rgb(237,245,228)] py-20 px-20">
  <div className="w-[50%]">
    <h2 className="text-3xl font-bold my-6">
    Become An Alison Course Creator
    </h2>
   
    <p className="text-md my-6">
    As a Course Creator, you will earn revenue by working with Alison’s publishing partners to convert their teaching material to online courses for our learners. You will write modules
    , course descriptions and learning outcomes that accurately reflect the course content and get online students excited about learning.
    </p>
    <button className="text-[15px] font-bold text-white bg-[rgb(0,155,93)] py-3 px-5 rounded-md mx-auto">
    Learn More About Creating Courses
    </button>
  </div>
  <div className='w-[40%]'> <img src={creatorcareer} className='w-[80%] h-[80%] ' /></div>
</div>

<div className="flex gap-35 py-20 ">
    <siv className='w-[40%] ml-24'> <img src={member} className="w-[76%]" /></siv>
  <div  className="w-[46%]">
    <h2 className="text-3xl font-bold my-6">
    Become A Member Of The Alison Affiliate Programme
    </h2>
   
    <p className="text-md my-6">
    By becoming an Alison Affiliate Programme Member, you can earn income for yourself and help empower friends, families, companies and communities by introducing them to free learning. 
    </p>
    <button className="text-[15px] font-bold text-white bg-[rgb(0,155,93)] py-3 px-5 rounded-md mx-auto">
    Become An Affiliate Member 
    </button>
  </div>
</div>

    </div>
  )
}

export default Earnedesktoparticle