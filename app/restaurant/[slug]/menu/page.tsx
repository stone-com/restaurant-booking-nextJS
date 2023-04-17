import NavBar from '@/app/components/NavBar';
import Header from '../components/Header';
import RestaurantNavbar from '../components/RestaurantNavbar';
import Menu from '../components/Menu';


export default function MenuPage() {
  return (
    <main className='w-screen min-h-screen bg-gray-100'>
      <main className='m-auto bg-white max-w-screen-2xl'>
        <NavBar />
        <Header />
        <div className='flex items-start justify-between w-2/3 m-auto 0 -mt-11'>
          <div className='bg-white w-[100%] rounded p-3 shadow'>
            <RestaurantNavbar />
            <Menu />
          </div>
        </div>
      </main>
    </main>
  );
}
