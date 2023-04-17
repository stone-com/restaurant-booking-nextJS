import RestaurantNavbar from '../components/RestaurantNavbar';
import Menu from '../components/Menu';

export default function MenuPage() {
  return (
    <>
        <div className='bg-white w-[100%] rounded p-3 shadow'>
          <RestaurantNavbar />
          <Menu />
        </div>
    </>
  );
}
