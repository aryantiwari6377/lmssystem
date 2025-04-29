
import React, { useState } from 'react';

function Faq() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqItems = [
        { question: 'What is verbal Reasoning Test ?', answer: 'Verbal reasoning tests assess your ability to comprehend and process information presented in written form.' },
        { question: 'What is an Aptitude Test ?', answer: 'Aptitude tests evaluate your ability to perform specific tasks or skills.' },
        { question: 'What is on Aptitude Test ?', answer: 'Aptitude tests may include questions related to logical reasoning, mathematics, and pattern recognition.' },
        { question: 'How do I prepare for an Aptitude Test?', answer: 'You can prepare by practicing similar questions and improving your general reasoning skills.' }
    ];

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='bg-[rgb(243,246,247)] py-12'>
            <h2 className='font-black text-[30px] text-center mt-8'> Frequently Asked Questions </h2> 
            <div className="faq border-t border-white border-opacity-30 w-[80%] ml-4 sm:ml-20 md:w-11/12 md:ml-7 my-8">
                {faqItems.map((item, index) => (
                    <div key={index} className="faq-item border-b border-white border-opacity-30">
                        <button
                            className={`faq-question w-full bg-transparent border-none text-left px-4 py-3 text-base cursor-pointer relative font-bold ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleAnswer(index)}
                        >   
                            Q: {item.question}
                            <span className={`absolute right-5 w-2.5 h-2.5 border-r-2 border-b-2 border-black transform rotate-45 transition-transform ${activeIndex === index ? 'rotate-[-135deg]' : ''}`}></span>
                        </button>
                        <div
                            className={`faq-answer overflow-hidden transition-all duration-300 ease-in-out px-4 py-2 bg-white bg-opacity-10 ${activeIndex === index ? 'max-h-[1000px] visible' : 'max-h-0 invisible'}`}
                        >
                            <p className="text-sm text-start">{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Faq;
