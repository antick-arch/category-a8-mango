import React from 'react';
import bannerImg from '@/assets/banner_img.svg'
import Image from 'next/image';
const Banner = () => {
    return (
        <div className='container mx-auto flex flex-col-reverse sm:flex-row gap-10 justify-between bg-amber-100 p-10 my-5 rounded-md'>
            <div className='flex flex-col justify-center space-y-5'>
                <p className='text-4xl font-semibold'>DIGITAL LIBRARY</p>
                <h2 className='text-6xl sm:text-6xl md:text-8xl font-bold'>Find Your <br /> <span className='text-red-500'>Next</span> Read</h2>
                <button className='btn btn-primary'>Browse Now</button>
            </div>
            <div>
                <Image height={400} width={"auto"} src={bannerImg} alt='banner image'></Image>
            </div>
        </div>
    );
};

export default Banner;