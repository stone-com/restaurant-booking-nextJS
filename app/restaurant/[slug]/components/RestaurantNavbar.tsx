import Link from 'next/link';

export default function RestaurantNavbar() {
  return (
    <nav className='flex pb-2 border-b text-reg'>
      <Link href='/restaurant/milestones-grill' className='mr-7'>
        Overview
      </Link>
      <Link href='/restaurant/milestones-grill/menu' className='mr-7'>
        Menu
      </Link>
    </nav>
  );
}
