import React from 'react'

import familyandfriends from '../images/familyandfriends.PNG';
import teachcarrer from '../images/techcareer.PNG';
import creatorcareer from '../images/creatorcareer.PNG';
import member from '../images/member.PNG';

function Earnmobilearticle() {
  return (
    <div>
                 <div className="flex justify-center items-center min-h-screen bg-[rgb(237,245,228)]">
  <div className="w-[92%] mx-[4%] text-center md:w-[70%] md:mx-[10%]">
    <h2 className="text-xl font-bold my-6">
      Empower Your Friends & Family By Sharing Free Quality Education
    </h2>
    <img src={familyandfriends} className="w-[190px] h-[160px] mx-auto" />
    <p className="text-sm my-6">
      Refer your friends, family and social network to Alison and earn free
      Digital Certificates and Digital Diplomas. Refer as many people as you
      want to - the more you refer, the more rewards you unlock!
    </p>
    <button className="text-[15px] font-bold text-white bg-[rgb(0,155,93)] py-3 px-5 rounded-md mx-auto">
      Share And Earn Rewards
    </button>
  </div>
</div>


<div className="flex justify-center items-center min-h-screen ">
  <div className="w-[92%] mx-[4%] text-center  md:w-[70%] md:mx-[10%]">
    <h2 className="text-xl font-bold my-6">
    Teach On Alison, Earn Money  & Inspire Millions
    </h2>
    <img src={teachcarrer} className="w-[190px] h-[160px] mx-auto" />
    <p className="text-sm my-6">
    If you are a subject matter expert or a skilled professional who wants to create and publish online courses, then you’ve come to the right place. Share your knowledge with a global
    </p>
    <button className="text-[15px] font-bold text-white bg-[rgb(0,155,93)] py-3 px-5 rounded-md mx-auto">
      Publish Your Course On Alison
    </button>
  </div>
</div>

<div className="flex justify-center items-center min-h-screen bg-[rgb(237,245,228)] ">
  <div className="w-[92%] mx-[4%] text-center  md:w-[70%] md:mx-[10%]">
    <h2 className="text-xl font-bold my-6">
    Become An Alison Course Creator
    </h2>
    <img src={creatorcareer} className="w-[190px] h-[130px] mx-auto" />
    <p className="text-sm my-6">
    As a Course Creator, you will earn revenue by working with Alison’s publishing partners to convert their teaching material to online courses for our learners. You will write modules
    , course descriptions and learning outcomes that accurately reflect the course content and get online students excited about learning.
    </p>
    <button className="text-[15px] font-bold text-white bg-[rgb(0,155,93)] py-3 px-5 rounded-md mx-auto">
    Learn More About Creating Courses
    </button>
  </div>
</div>

<div className="flex justify-center items-center min-h-screen">
  <div className="w-[92%] mx-[4%] text-center md:w-[70%] md:mx-[10%]">
    <h2 className="text-xl font-bold my-6">
    Become A Member Of The Alison Affiliate Programme
    </h2>
    <img src={member} className="w-[190px] h-[130px] mx-auto" />
    <p className="text-sm my-6">
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

export default Earnmobilearticle