import MenuCard from './MenuCard';
import { Item } from '@prisma/client';

export default function Menu({ menu }: { menu: Item[] }) {
  return (
    <main className='mt-5 bg-white'>
      <div>
        <div className='pb-1 mt-4 mb-1'>
          <h1 className='text-4xl font-bold'>Menu</h1>
        </div>
        <div className='flex flex-wrap justify-between'>
          {menu.length ? (menu.map((item) => (
            <MenuCard key={item.id} item={item}/>
          ))) : (
            <div className='flex flex-wrap justify-between'>
              <p>This restaurant does not have a menu.</p>
              </div>
          )}
        </div>
      </div>
    </main>
  );
}
