import Stars from '@/app/components/Stars';
import { Review } from '@prisma/client';

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className='border-b pb-7 mb-7'>
      <div className='flex'>
        <div className='flex flex-col items-center w-1/6'>
          <div className='flex items-center justify-center w-16 h-16 bg-blue-400 rounded-full'>
            <h2 className='text-2xl text-white uppercase'>
              {review.first_name[0]} {review.last_name[0]}
            </h2>
          </div>
          <p className='text-center'>
            {review.first_name} {review.last_name}
          </p>
        </div>
        <div className='w-5/6 ml-10'>
          <div className='flex items-center'>
            <div className='flex mr-5'>
              {/* Pass in the single review as an array into the stars component, because it expects an array in its props. It will still calculate number of stars based off of single review rather than getting average */}
              <Stars reviews={[review]}/>
            </div>
          </div>
          <div className='mt-5'>
            <p className='text-lg font-light'>{review.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
