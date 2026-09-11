import React from 'react';
import Logo from '../assets/logo-text.png'


const Navbar = () => {
    return (
        <nav className='mt-7'>
            <div className='flex justify-between container mx-auto items-center'>
                <img className='w-34 h-10' src={Logo} alt="" />
                <ul className='flex gap-10'>
                    <li className='text-pink-600 '><a href="">Home</a></li>
                    <li className=' text-gray-700'><a href="">Technologies</a></li>
                    <li className=' text-gray-700'><a href="">Projects</a></li>
                    <li className=' text-gray-700'><a href="">About</a></li>
                    <li className=' text-gray-700'><a href="">Contact</a></li>
                </ul>
                <div className='flex gap-5'>
                    <button className=' text-gray-600 cursor-pointer'>Sign In</button>
                    <button className='bg-pink-600 text-gray-50 pt-1.5 pb-1.5 pr-3.5 pl-3.5 rounded-3xl cursor-pointer'>Sign Up</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;