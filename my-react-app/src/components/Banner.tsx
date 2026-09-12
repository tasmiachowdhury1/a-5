import React from 'react';
import hero from '../assets/banner-stack.png'
const Banner = () => {
    return (
        <div className="mt-10">
            <div className='container mx-auto justify-between flex items-center'>
                <div className="flex flex-col gap-9">
                    <div className="flex flex-col gap-7" ><h1 className="text-6xl font-bold">
                        Build Your Ideal <br /> <span className="bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600 bg-clip-text text-transparent">Development Stack</span>
                    </h1>
                        <p className="w-120 text-[17px] text-gray-600">Explore frontend, backend, database, and tooling options,
                            compare them side by side, and put together the stack that fits your
                            next project.</p></div>
                    <div className="flex gap-3"><button className="cursor-pointer bg-gradient-to-r from-orange-500 to-pink-600 text-gray-50 p-2 rounded-sm">Explore Technologies</button>
                        <button className="text-gray-600 border-gray-300 border rounded-xs p-2 cursor-pointer">Learn More</button></div>
                </div>
                <img className='w-140 h-140' src={hero} alt="" />
            </div>
        </div>
    );
};

export default Banner;