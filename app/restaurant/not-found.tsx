'use client';

import Image from 'next/image';
import errorMascot from '../../public/icons/error.png';

export default function Error({ error }: { error: Error }) {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-200'>
      <Image src={errorMascot} alt='' className='w-56 mb-8' />
      <div className='bg-white shadow rounded-xl px-9 py-14'>
        <h3 className='text-3xl font-bold'>Whoops...</h3>
        <p className='font-bold text-reg'>We couldn't find that restaurant</p>
        <p className='mt-6 text-sm font-light'>Error Code 404</p>
      </div>
    </div>
  );
}
