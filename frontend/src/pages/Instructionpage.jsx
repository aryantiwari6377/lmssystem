import React from 'react'
import { useNavigate } from 'react-router-dom'
function Instructionpage({ testType, onStartTest }) {
    const navigate = useNavigate();
  return (
    <div className='bg-[rgb(247,248,242)] p-3 mx-auto w-[600px]'>
        <h2 className='font-bold text-2xl'>Instructions</h2>
        <ul className='py-5 flex flex-col gap-y-2'>
            <li className='text-start'>1. The {testType} Test consists of 20 multiple-choice questions.</li>
            <li className='text-start'>2. The maximum score for this section is 200 marks.</li>
            <li className='text-start'>3. Each question carries 10 marks.</li>
            <button className="mx-auto my-3 bg-[rgb(185,128,29)] hover:bg-[rgb(32,76,86)] rounded-xl text-white font-bold w-28 text-md p-1" onClick={onStartTest}>Start Test</button>
        </ul>
    </div>
  )
}

export default Instructionpage