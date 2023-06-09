import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';
import SearchSidebar from './components/SearchSidebar';
import { PRICE, PrismaClient } from '@prisma/client';

export const metadata = {
  title: 'Search',
  description: 'Generated by create next app',
};

const prisma = new PrismaClient();

const fetchRestaurantsByCity = (city: string | undefined) => {
  // create variable for select, to keep code DRY.
  // pass into both findMany calls below
  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
  };

  // return all restaurants if no search params
  if (!city) return prisma.restaurant.findMany({ select });

  return prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city.toLowerCase(),
        },
      },
    },
    select,
  });
};

const fetchLocations = async () => {
  return prisma.location.findMany();
};

const fetchCuisines = async () => {
  return prisma.cuisine.findMany();
};

export default async function Search({
  searchParams,
}: {
  searchParams: { city?: string, cuisine?: string, price?: PRICE };
}) {
  const restaurants = await fetchRestaurantsByCity(searchParams.city);
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();

  return (
    <>
      <Header />
      <div className='flex items-start justify-between w-2/3 py-4 m-auto'>
        <SearchSidebar locations={locations} cuisines={cuisines} searchParams={searchParams}/>
        <div className='w-5/6'>
          {restaurants.length ? (
            restaurants.map((restaurant) => (
              <>
                <RestaurantCard restaurant={restaurant} key={restaurant.id} />
              </>
            ))
          ) : (
            <p>Sorry, we found no restaurants in this area</p>
          )}
        </div>
      </div>
    </>
  );
}
