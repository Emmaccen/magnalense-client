'use client';

import { useState } from 'react';
import { Star, Filter, ChevronDown } from 'lucide-react';
import Image from 'next/image';

interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  review: string;
  image: string;
  color: string;
  rx: string;
}

const reviews: Review[] = Array(6).fill({
  id: 1,
  name: 'S******a',
  date: 'Aug 14, 2024',
  rating: 5,
  review:
    'I absolutely love this glasses! The design is unique and the material feels so comfortable. As a fellow designer, I appreciate the attention to detail. It’s become my favorite glasses.',
  color: 'Two-Tone',
  rx: 'Single Vision',
});

export default function ReviewsSection() {
  const [sortedReviews] = useState(reviews);

  return (
    <section>
      <div className="flex justify-between items-center pb-2">
        <h2><span className="text-lg font-semibold">All Reviews</span> <span>(451)</span></h2>
        <div className="flex gap-2">
          <button className="flex items-center gap-1 px-3 py-1.5 border rounded-full bg-gray-200">
            <Filter size={16} /> 
          </button>
          <button className="flex items-center gap-1 px-3 py-1.5 border rounded-full bg-gray-200">
            Latest <ChevronDown size={16} />  
          </button>
          <button className="flex items-center gap-1 bg-black text-white rounded-full px-5">
            Write a Review
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {sortedReviews.map((review) => (
          <div key={review.id} className="border p-4 rounded-lg shadow-sm">
            <div className="flex justify-between">
              <span className="font-semibold rounded-full">{review.name} ✅</span>
              <span className="text-gray-500 text-sm">{review.date}</span>
            </div>
            <div className="flex items-center gap-1 my-2">
              {[...Array(review.rating)].map((_, index) => (
                <Star key={index} size={16} className="text-yellow-500" fill="currentColor" />
              ))}
            </div>
            <p className="text-gray-700 text-sm">{review.review}</p>
            <div className="flex items-center gap-2 mt-3">
              <Image
                src="/images/FrameReview1.png"
                alt="Reviewer"
                width={40}
                height={40}
              />
              <div>
              <Image
                src="/images/FrameReview2.png"
                alt="Reviewer"
                width={40}
                height={40}
              />
              </div>
            </div>
            <div className='flex gap-5'>
            <p className="text-sm text-gray-500">Color: {review.color}</p>
            <p className="text-sm text-gray-500">RX: {review.rx}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button className='rounded-full border border-black border-solid py-3 px-6'>More Reviews</button>
      </div>
    </section>
  );
}
