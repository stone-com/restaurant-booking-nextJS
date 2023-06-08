import Price from '@/app/components/Price';
import { Cuisine, PRICE, Location } from '@prisma/client';
import Link from 'next/link';

type Restaurant = {
  id: number;
  name: string;
  main_image: string;
  price: PRICE;
  cuisine: Cuisine;
  location: Location;
  slug: string;
};

export default function RestaurantCard({
  restaurant,
}: {
  restaurant: Restaurant;
}) {
  return (
    <div className='flex pb-5 ml-4 border-b'>
      <img src={restaurant.main_image} alt='' className='rounded w-44' />
      <div className='pl-5'>
        <h2 className='text-3xl'>{restaurant.name}</h2>
        <div className='flex items-start'>
          <div className='flex mb-2'>*****</div>
          <p className='ml-2 text-sm'>Awesome</p>
        </div>
        <div className='mb-9'>
          <div className='flex font-light text-reg'>
            <Price price={restaurant.price} />
            <p className='mr-4'>{restaurant.cuisine.name}</p>
            <p className='mr-4'>
              {/* cap;italize first letter of location name */}
              {restaurant.location.name.charAt(0).toUpperCase() +
                restaurant.location.name.slice(1)}
            </p>
          </div>
        </div>
        <div className='text-red-600'>
          <Link href={`/restaurant/${restaurant.slug}`}>
            View more information
          </Link>
        </div>
      </div>
    </div>
  );
}
