import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import twitchImg from '../public/assets/projects/twitch.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';

const twitch = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={twitchImg} />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%]  right-[50%] translate-x-[-50%] translate-y-[-50%] z-[100] p-2'>
                    <h2 className='text-white'>Twitch</h2>
                    <h3 className='text-white'>React JS / Tailwind</h3>
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
                    <h2 className='py-4'>Overview</h2>
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolore in exercitationem officia illum, provident natus cumque officiis repellat, temporibus voluptatibus corporis nulla error. Mollitia aperiam laboriosam eos est consequuntur ullam consectetur, explicabo architecto corporis dignissimos quisquam ipsa, reiciendis blanditiis quo beatae, fuga soluta. Praesentium sint excepturi voluptatem omnis, asperiores dolorem libero voluptates reiciendis officia quasi obcaecati porro vitae quod.</p>
                    <button className='px-8 py-2 mt-4 m-2'>Demo</button>
                    <button className='px-8 py-2 mt-4 m-2'>Code</button>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center '>
                                <RiRadioButtonFill className='pr-1' /> React
                            </p>
                            <p className='text-gray-600 py-2 flex items-center '>
                                <RiRadioButtonFill className='pr-1' /> Tailwind
                            </p>
                            <p className='text-gray-600 py-2 flex items-center '>
                                <RiRadioButtonFill className='pr-1' /> Javascript
                            </p>
                            <p className='text-gray-600 py-2 flex items-center '>
                                <RiRadioButtonFill className='pr-1' /> Firebase
                            </p>
                            <p className='text-gray-600 py-2 flex items-center '>
                                <RiRadioButtonFill className='pr-1' /> Google API
                            </p>
                            <p className='text-gray-600 py-2 flex items-center '>
                                <RiRadioButtonFill className='pr-1' /> Zillow API
                            </p>
                        </div>
                    </div>
                </div>
                <Link href='/#projects'>
                    <p className='underline cursor-pointer'>Back</p>
                </Link>
            </div>
        </div>
    );
};

export default twitch;
