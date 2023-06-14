import Header from './components/Header';

export default function Loading() {
  return (
    <main>
      <Header />
      <div className='flex flex-wrap justify-center py-3 mt-10 px-36'>
        {/* create 12 blank/grey cards to display when loading */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
          <div
            className='w-64 m-3 overflow-hidden border rounded cursor-pointer animate-pulse bg-slate-200 h-72'
            key={num}
          ></div>
        ))}
      </div>
    </main>
  );
}
