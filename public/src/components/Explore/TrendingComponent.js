import React from 'react';

export default function TrendingComponent({ data }) {
  return (
    <div className='hidden lg:block w-full'>
      <div className='flex justify-end'>
        <div className='border rounded-lg bg-gray-100 w-3/5'>
          <h1 className='text-txtColor text-3xl font-bold p-5'>Tags for you</h1>
          {data.map((item, i) => (
            <div
              key={i}
              className='flex flex-col p-5 text-txtColor cursor-pointer hover:bg-gray-300 duration-300'>
              <span className='font-bold'>{item.tag}</span>
              <span>{item.count} tags</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
