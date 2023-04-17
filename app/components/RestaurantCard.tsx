import Link from "next/link";

export default function RestaurantCard() {
  return (
    <div className='w-64 m-3 overflow-hidden border rounded cursor-pointer h-72'>
      <Link href='/restaurant/milestones-grill'>
        <img
          src='https://resizer.otstatic.com/v2/photos/wide-huge/2/31852905.jpg'
          alt=''
          className='w-full h-36'
        />
        <div className='p-1'>
          <h3 className='mb-2 text-2xl font-bold'>Milestones Grill</h3>
          <div className='flex items-start'>
            <div className='flex mb-2'>*****</div>
            <p className='ml-2'>77 reviews</p>
          </div>
          <div className='flex font-light capitalize text-reg'>
            <p className='mr-3 '>Mexican</p>
            <p className='mr-3'>$$$$</p>
            <p>Toronto</p>
          </div>
          <p className='mt-1 text-sm font-bold'>Booked 3 times today</p>
        </div>
      </Link>
    </div>
  );
}
