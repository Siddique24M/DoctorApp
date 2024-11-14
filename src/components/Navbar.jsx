import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false)
    const[token, setToken] = useState(true)
  return (
    <div className='flex item-centre justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img className='w-44 cursor-pointer' src={assets.logo} alt="" />
      <ul className='hidden md:flex item-start gap-5 font-medium'>
        <NavLink to='/'>
            <li className='py-1'>Home</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/doctors'>
            <li className='py-1'>Doctors</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/about'>
            <li className='py-1'>About</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/contact'>
            <li className='py-1'>Contact</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
      </ul>
      <div className='flex item-centre gap-4'>
        {
            token
            ? <div className='flex items-center gap-2 cursor-pointer relative group'>
                <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
                
                <div className="relative">
                  <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                  
                  {/* Dropdown menu */}
                  <div className="hidden group-hover:block absolute top-full left-1/2 -translate-x-1/2 bg-stone-200 rounded min-w-[12rem] flex flex-col gap-4 p-4 shadow-lg z-10 mr-4">
                    <p onClick={() => navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                    <p onClick={() => navigate('my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                    <p className='hover:text-black cursor-pointer'>Logout</p>
                  </div>
                </div>
                
              
            
          

            </div>
            
        
        :<button onClick={()=>navigate('/login')}className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create Account</button>
        }
      </div>
    </div>
  )
} 

export default Navbar
