import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
    return (
        <div className='w-full h-screen text-center'>
            <div className='max-w-[1240px] h-full w-full mx-auto p-2 flex justify-center items-center'>
                <div className=''>
                    <p className='uppercase text-sm tracking-widest  text-gray-600'>lets build something together</p>
                    <h1 className='py-4 text-gray-700'>
                        Hi, I'm <span className='text-[#5651e5]'>Murtaza</span>
                    </h1>
                    <h1 className='py-2 text-gray-700'>A Front-End Web Developer</h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto '>I'm a front-end web developer specializing in building (and occasionally designing) exeptional digital experiences. Currently, I'm focused on building responsive front-end web applications while learning back-end technologies</p>

                    <div className='flex justify-between items-center max-w-[350px] m-auto py-4 '>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-[#5651e5]'>
                            <BsFillPersonLinesFill size={25} />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-[#5651e5]'>
                            <FaGithub size={25} />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-[#5651e5]'>
                            <FaLinkedinIn size={25} />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-[#5651e5]'>
                            <AiOutlineMail size={25} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
