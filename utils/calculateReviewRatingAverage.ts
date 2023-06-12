import { Review } from '@prisma/client';

// get averahe of all reviews for a restaurant
// add all together with reduce and divide by number of reviews
export const calculateReviewRatingAverage = (reviews: Review[]) => {
  if (!reviews.length) return 0;
  return (
    reviews.reduce((sum, review) => {
      return sum + review.rating;
    }, 0) / reviews.length
  );
};
