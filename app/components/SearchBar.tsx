'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
export default function SearchBar() {
  const router = useRouter();
  const [location, setLocation] = useState('');
  return (
    <div className='flex justify-center py-3 m-auto text-lg text-left'>
      <input
        className='rounded mr-3 p-2 w-[450px]'
        type='text'
        placeholder='State, city or town'
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button
        onClick={() => {
          if (location === 'banana') return;
          router.push('/search');
        }}
        className='py-2 text-white bg-red-600 rounded px-9'
      >
        Let's go
      </button>
    </div>
  );
}
