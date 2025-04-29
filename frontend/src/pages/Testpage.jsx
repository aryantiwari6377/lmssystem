import React, { useState } from 'react';

import Instructionpage from './Instructionpage';
import VerbalTest from './Verbaltest'; 
import NumericalTest from './Numericaltest';
import AbstractTest from './Abstracttest';
import PersonalityTest from './Personality';
import Questionpage from './Questionpage';

function Testpage() {
    const [activeTest, setActiveTest] = useState('Verbal');
    const [showInstructions, setShowInstructions] = useState(true); 
    const [isTestStarted, setIsTestStarted] = useState(false); 

    const handleTestSelection = (test) => {
        setActiveTest(test);
        setShowInstructions(true);
        setIsTestStarted(false);
    };

    const handleStartTest = () => {
        setShowInstructions(false); 
        setIsTestStarted(true); 
    };

    const renderContent = () => {
        if (showInstructions) {
            
            switch (activeTest) {
                case 'Verbal':
                    return <Instructionpage testType="Verbal" onStartTest={handleStartTest} />;
                case 'Numerical':
                    return <Instructionpage testType="Numerical" onStartTest={handleStartTest} />;
                case 'Abstract':
                    return <Instructionpage testType="Abstract" onStartTest={handleStartTest} />;
                case 'Personality':
                    return <Instructionpage testType="Personality" onStartTest={handleStartTest} />;
                default:
                    return null;
            }
        } else {
           
            switch (activeTest) {
                case 'Verbal':
                    return <Questionpage category={activeTest}/>;
                case 'Numerical':
                    return <Questionpage category={activeTest}/>;
                case 'Abstract':
                    return <Questionpage category={activeTest}/>;
                case 'Personality':
                    return <Questionpage category={activeTest}/>;
                default:
                    return null;
            }
        }
    };

    return (
        <div className="lg:flex  mt-3 lg:mx-6">
            <div className="font-bold flex   gap-y-8 w-[300px] flex-wrap md:w-[600px] lg:flex-col justify-between lg:justify-evenly  lg:w-[20%] lg:h-[60%] mx-auto mt-12">
                <div className="flex gap-x-3 cursor-pointer text-md lg:text-xl bg-purple-400 rounded-full p-1.5 lg:justify-center" onClick={() => handleTestSelection('Verbal')}>
                    <span>★</span> <p>Verbal test</p>
                </div>
                <div className="flex gap-x-3 cursor-pointer text-md lg:text-xl bg-purple-400 rounded-full p-1.5 lg:justify-center" onClick={() => handleTestSelection('Numerical')}>
                    <span>★</span> <p>Numerical test</p>
                </div>
                <div className="flex gap-x-3 cursor-pointer text-md lg:text-xl bg-purple-400 rounded-full p-1.5 lg:justify-center" onClick={() => handleTestSelection('Abstract')}>
                    <span>★</span> <p>Abstract test</p>
                </div>
                <div className="flex gap-x-3 cursor-pointer text-md  lg:text-xl bg-purple-400 rounded-full p-1.5 lg:justify-center" onClick={() => handleTestSelection('Personality')}>
                    <span>★</span> <p>Personality test</p>
                </div>
            </div>

            <div className="flex-grow flex items-center justify-center p-2 md:p-6 ">
                {renderContent()}
            </div>
        </div>
    );
}

export default Testpage;

