import React from 'react';
import Image from 'next/image';

import Link from 'next/link';

const ProjectItem = ({ header, language, src, projectUrl, button }) => {
    return (
        <div>
            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                <Image src={src} className='rounded-xl group-hover:opacity-10 ' alt='/' />
                <div className='hidden group-hover:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
                    <h3 className='text-2xl tracking-wider text-white'>{header}</h3>
                    <p className='pb-4 pt-2 text-white '>{language}</p>
                    <Link href={`${projectUrl}`}>
                        <p className='p-3 bg-white rounded-lg text-gray-700 font-bold text-lg cursor-pointer'>{button}</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;
