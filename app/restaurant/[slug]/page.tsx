import NavBar from '@/app/components/NavBar';
import Header from './components/Header';
import RestaurantNavbar from './components/RestaurantNavbar';
import Title from './components/Title';
import Rating from './components/Rating';
import Description from './components/Description';
import Images from './components/Images';
import Reviews from './components/Reviews';
import ReservationCard from './components/ReservationCard';

export default function RestaurantDetails() {
  return (
    <main className='w-screen min-h-screen bg-gray-100'>
      <main className='m-auto bg-white max-w-screen-2xl'>
        <NavBar />
        <Header />
        <div className='flex items-start justify-between w-2/3 m-auto 0 -mt-11'>
          <div className='bg-white w-[70%] rounded p-3 shadow'>
            <RestaurantNavbar />
            <Title />
            <Rating />
            <Description />
            <Images />
            <Reviews />
          </div>
          <div className='w-[27%] relative text-reg'>
            <ReservationCard />
          </div>
        </div>
      </main>
    </main>
  );
}
