import React from 'react';

const About = () => {
    return (
        <div id='about'>
            <div className='w-full py-24 p-2 flex items-center '>
                <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 '>
                    <div className='col-span-2'>
                        <p className='text-[#5651e5] uppercase text-xl tracking-widest'>about</p>
                        <h2 className='py-4 '>Who I am</h2>
                        <p className='py-2 text-gray-600'>Lorem ipsum dolor sit amet.</p>
                        <p className='py-2 text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem ducimus eos repellendus quia unde quas ipsam atque nemo, assumenda natus repudiandae debitis eum deleniti eligendi optio! Quidem maiores nesciunt rerum iste, veniam consectetur veritatis unde omnis! Hic sapiente vel excepturi.</p>
                        <p className='py-2 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cumque quis repellat fugiat nesciunt quisquam iure ipsam dolor, maxime, distinctio atque repellendus sed officiis nisi vero magnam sapiente dolorum eum numquam hic deserunt cupiditate suscipit officia praesentium! Perspiciatis beatae quibusdam officia, officiis, quod saepe eum, delectus possimus error accusantium eius?</p>
                        <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p>
                    </div>

                    <div className='w-full h-auto m-auto shadow-xl rounded-xl shadow-gray-400 flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                        <img className='rounded-xl' src='https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60' alt='/' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
