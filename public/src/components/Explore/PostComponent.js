import React from 'react';
import { FaHeart, FaRegComment } from 'react-icons/fa';

const PostComponent = ({ name }) => {
  return (
    <div className='w-full tablet:w-3/4 mx-auto border p-4 cursor-pointer hover:bg-gray-100 duration-300'>
      <div className='flex'>
        <div className='w-1/6 mt-[5px]'>
          <img
            className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-full'
            src='https://i.pravatar.cc/300'
            alt=''
          />
        </div>
        <div className='w-full'>
          <div className='flex items-center text-base md:text-xl text-txtColor mb-2 gap-1'>
            <span className='font-bold'>{name}</span>
            <span>~</span>
            <span>11h</span>
          </div>
          <h1 className='text-txtColor mb-4'>
            "Your time is limited, so don't waste it living someone else's
            life." -Steve Jobs
          </h1>
          <img
            className='w-full h-auto rounded-lg mb-4'
            src='https://placeimg.com/640/480/any'
            alt=''
          />
          <div className='flex gap-8'>
            <div className='flex gap-1 cursor-pointer text-base md:text-xl text-txtColor items-center'>
              <FaRegComment />
              <span>100k</span>
            </div>
            <div className='flex gap-1 cursor-pointer text-base md:text-xl text-red-500 items-center'>
              <FaHeart />
              <span>500k</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostComponent;
