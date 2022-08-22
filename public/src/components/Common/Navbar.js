import React, { useState } from 'react';
import { SiFoodpanda } from 'react-icons/si';
import { IoMdClose, IoMdMenu, IoMdSearch } from 'react-icons/io';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const links = [
    {
      name: 'Dashboard',
      link: '/',
    },
    {
      name: 'Logout',
      link: '/logout',
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className='w-full fixed left-0 top-0 shadow-lg'>
        <div className='flex bg-white items-center justify-between py-4 px-7'>
          <div className='text-sColor text-2xl'>
            <SiFoodpanda />
          </div>
          <div className='tablet:w-1/2 md:w-1/4 md:ml-28 flex items-center h-10 rounded-lg overflow-hidden'>
            <div className='grid text-xl place-items-center h-full w-12 text-gray-300 bg-gray-100'>
              <IoMdSearch />
            </div>
            <input
              className='h-full w-full outline-none text-sm md:text-base text-txtColor pr-2 bg-gray-100'
              type='text'
              id='search'
              placeholder='Search something..'
            />
          </div>
          <div className='flex items-center gap-3'>
            <div className='flex gap-2'>
              <img
                className='rounded-full w-[30px] h-[30px]'
                src='https://i.pravatar.cc/300'
                alt=''
              />
              <span className='text-sColor hidden md:block'>Mockingjay</span>
            </div>

            <div
              onClick={() => setOpen(!open)}
              className='md:hidden text-2xl text-sColor'>
              {open ? <IoMdClose /> : <IoMdMenu />}
            </div>
          </div>
          <ul
            className={`${
              open ? 'top-16' : 'top-[-490px]'
            } absolute md:static bg-white shadow-lg z-[-1] left-0 md:hidden w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in-out`}>
            {links.map((item, i) => (
              <Link key={i} to={item.link}>
                <li className='md:ml-8 text-lg md:my-0 my-7'>{item.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
