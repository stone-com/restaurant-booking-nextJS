import NavBar from '../components/NavBar';
import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';
import SearchSidebar from './components/SearchSidebar';

export default function Search() {
  return (
    <main className='w-screen min-h-screen bg-gray-100'>
      <main className='m-auto bg-white max-w-screen-2xl'>
        <NavBar />
        <Header />
        <div className='flex items-start justify-between w-2/3 py-4 m-auto'>
          <SearchSidebar />
          <div className='w-5/6'>
            <RestaurantCard />
          </div>
        </div>
      </main>
    </main>
  );
}
