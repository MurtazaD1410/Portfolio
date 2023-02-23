import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import CryptoImg from '../public/assets/projects/crypto.jpg';
import netflixImg from '../public/assets/projects/netflix.jpg';
import twitchImg from '../public/assets/projects/twitch.jpg';
import ProjectItem from './ProjectItem';

const Projects = () => {
    return (
        <div className='w-full pt-10' id='projects'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
                <h2 className='py-4'>What I've Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectItem header={'Property Finder'} language={'React JS'} src={propertyImg} projectUrl='/property' button={'More Info'} />
                    <ProjectItem header={'Crypto Currency'} language={'React JS'} src={CryptoImg} projectUrl='/crypto' button={'More Info'} />
                    <ProjectItem header={'Netflix'} language={'React JS'} src={netflixImg} projectUrl='/netflix' button={'More Info'} />
                    <ProjectItem header={'Twitch'} language={'React JS'} src={twitchImg} projectUrl='/twitch' button={'More Info'} />
                </div>
            </div>
        </div>
    );
};

export default Projects;
