import Link from 'next/link';
import NavBar from './components/NavBar';
import Header from './components/Header';

export default function Home() {
  return (
    <main className='w-screen min-h-screen bg-gray-100'>
      <main className='m-auto bg-white max-w-screen-2xl'>
        <NavBar />
        <main>  
          <Header/>
            {/* CARDS */}
          <div className='flex flex-wrap py-3 mt-10 px-36'>
            {/* CARD */}
        
            {/* CARD */}
          </div>
          {/* CARDS */}
        </main>
      </main>
    </main>
  );
}
