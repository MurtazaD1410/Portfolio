import React from 'react';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import Link from 'next/link';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {
    return (
        <div id='contact' className='pt-12'>
            <div className='w-full lg:h-screen '>
                <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                    <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
                    <h2 className='py-4'>Get In Touch</h2>
                    <div className='grid lg:grid-cols-5 gap-8'>
                        {/* left */}
                        <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                            <div className='lg:p-4 h-full'>
                                <div className=''>
                                    <img className='rounded-xl hover:scale-105 ease-in duration-300' src='https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbnRhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60' alt='' />
                                </div>
                                <div className=''>
                                    <h2 className='py-2'>Muratza Dhariwala</h2>
                                    <p className=''>Front-End Developer</p>
                                    <p className='py-4'>I'm available for freelance of full-time positions. Contact me and let's talk.</p>
                                </div>
                                <div className='mt-10'>
                                    <p className='uppercase pt-8'>Connect With me </p>
                                    <div className=''>
                                        <div className='flex justify-between items-end  m-auto py-4 '>
                                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-[#5651e5]'>
                                                <BsFillPersonLinesFill />
                                            </div>
                                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-[#5651e5]'>
                                                <FaGithub />
                                            </div>
                                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-[#5651e5]'>
                                                <FaLinkedinIn />
                                            </div>
                                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-[#5651e5]'>
                                                <AiOutlineMail />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                            <div className='p-4'>
                                <form action=''>
                                    <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                        <div className='flex flex-col'>
                                            <label className='uppercase text-sm py-2'>Name</label>
                                            <input type='text' className='border-2 rounded-lg p-3 flex border-gray-300' />
                                        </div>
                                        <div className='flex flex-col'>
                                            <label className='uppercase text-sm py-2'>Phone Number</label>
                                            <input type='text' className='border-2 rounded-lg p-3 flex border-gray-300' />
                                        </div>
                                    </div>
                                    <div className='flex flex-col py-2'>
                                        <label className='uppercase text-sm py-2'>Email</label>
                                        <input type='email' name='' id='' className='border-2 rounded-lg p-3 flex border-gray-300 ' />
                                    </div>
                                    <div className='flex flex-col py-2'>
                                        <label className='uppercase text-sm py-2'>subject</label>
                                        <input type='text' name='' id='' className='border-2 rounded-lg p-3 flex border-gray-300 ' />
                                    </div>
                                    <div className='flex flex-col py-2'>
                                        <label className='uppercase text-sm py-2'>subject</label>
                                        <textarea type='text' name='' id='' className='border-2 rounded-lg p-3 flex border-gray-300' rows={10} />
                                    </div>
                                    <button className='w-full p-3 mt-4 text-gray-100 font-bold'>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center py-12'>
                    <Link href='/'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 text-[#5651e5]'>
                            <HiOutlineChevronDoubleUp className='m-auto text-[#5651e5]' size={30} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;
