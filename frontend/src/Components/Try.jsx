import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Try() {

    const contentarr = [
        {
            content: "Showcase your aptitude & ability  to potential employers",
            icon: " faChartSimple"
        }, {
            content: "Practice  the test before interviews & prepare for  future job opportunities",
            icon: "faDesktop"
        }, {
            content: "Upskill and improve your score with free course recommendations",
            icon: "faPuzzlePiece"
        }
    ]

    return (
        <div>
            <div className='bg-[rgb(0,81,130)] p-8'>
                <div className='w-[38%] flex flex-col gap-y-4'>
        {contentarr.map((item) => <div className='flex gap-x-4'>
                        <div className='bg-[rgb(11,36,65)] text-white rounded-full w-8 h-8 p-2'><FontAwesomeIcon icon={item.icon} /></div>
                        <p className='text-white text-sm'>{item.content}</p>
                    </div>)}
                    {/* <div className='flex gap-x-4'><div className='bg-[rgb(11,36,65)] text-white rounded-full w-8 h-8 p-2'><FontAwesomeIcon icon={ faChartSimple} /></div><p className='text-white text-sm'> Showcase your aptitude & ability  to potential employers </p></div>
        <div className='flex gap-x-4'><div className='bg-[rgb(11,36,65)] text-white rounded-full w-8 h-8 p-2'><FontAwesomeIcon icon={ faDesktop} /></div><p  className='text-white text-sm'>Practice  the test before interviews & prepare for  future job opportunities</p></div>
        <div className='flex gap-x-4'><div className='bg-[rgb(11,36,65)] text-white rounded-full w-8 h-8 p-2'><FontAwesomeIcon icon={ faPuzzlePiece } /></div><p  className='text-white text-sm'>Upskill and improve your score with free course recommendations</p> </div> */}
                </div>
            </div>

 

        </div>

    )
}

export default Try