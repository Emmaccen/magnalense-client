"use client";

import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

const testimonials = [
    {
        id: 1,
        name: 'Sarah K',
        rating: 5,
        text: "These blue light glasses are both stylish and functional. I love how they look on me, and they're perfect for both work and casual wear.",
        image: '/images/firstCustomer.png',
        verified: true,
    },
    {
        id: 2,
        name: 'Jasmine P',
        rating: 5,
        text: "My eye strain has significantly reduced, and I don't experience those annoying headaches anymore.",
        image: '/images/secondCustomer.png',
        verified: true,
    },
    {
        id: 3,
        name: 'Alex M',
        rating: 5,
        text: "Perfect for reducing eye strain during long gaming sessions, with no color distortion and comfortable to wear with a headset.",
        image: '/images/thirdCustomer.png',
        verified: true,
    },
]

export default function SatisfiedCustomers() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    const renderStars = (rating: number) => {
    const filledStars = Math.min(rating, 5); // Calculate the number of filled stars based on the rating
    const emptyStars = 5 - filledStars; // Calculate the number of empty stars

    return (
        <>
            {Array.from({ length: filledStars }, (_, i) => (
                <svg key={i} className='w-[16px] h-[16px] fill-[#FCD34D] text-[#FCD34D]' viewBox='0 0 20 20' fill='currentColor'>
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
            ))}
            {Array.from({ length: emptyStars }, (_, i) => (
                <svg key={i} className='w-[16px] h-[16px] fill-gray-200' viewBox='0 0 20 20' fill='currentColor'>
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
            ))}
        </>
    );
}

    return (
        <div className='w-full bg-white py-[48px] px-[24px] md:px-[48px] lg:px-[80px]'>
            <div className='max-w-[1200px] mx-auto'>
                {/* Header */}
                <div className='flex items-center justify-between mb-[48px]'>
                    <h2 className='text-[28px] md:text-[32px] font-medium text-[#374151] leading-[1.2]'>Satisfied Customers</h2>
                    <div className='flex items-center gap-[12px]'>
                        <button
                            onClick={prevSlide}
                            className='w-[44px] h-[44px] rounded-full bg-white hover:bg-[#E5E7EB] transition-colors duration-200 flex items-center justify-center border-black border-[1px]'
                        >
                            <ArrowLeft className='w-[20px] h-[20px] text-black' />
                        </button>
                        <button
                            onClick={nextSlide}
                            className='w-[44px] h-[44px] rounded-full bg-[#1F2937] hover:bg-[#111827] transition-colors duration-200 flex items-center justify-center'
                        >
                            <ArrowRight className='w-[20px] h-[20px] text-white' />
                        </button>
                    </div>
                </div>

                {/* Testimonials Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] mb-[48px]'>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className='flex flex-col'>
                            {/* Customer Image */}
                            <div className='w-full aspect-[4/3] rounded-[12px] overflow-hidden bg-[#F3F4F6] order-[-1] md:order-none mb-[24px]'>
                                <Image
                                    src={`${testimonial.image}`}
                                    alt={`${testimonial.name} customer photo`}
                                    className='object-cover'
                                    width={400}
                                    height={300}
                                />
                            </div>

                            {/* Stars */}
                            <div className='flex items-center gap-[2px] mb-[12px]'>{renderStars(testimonial.rating)}</div>

                            {/* Name and Verified Badge */}
                            <div className='flex gap-[8px] mb-[16px] flex-col'>
                                <h3 className='text-[18px] font-bold text-[#000000] leading-[1.2]'>{testimonial.name}</h3>
                                {testimonial.verified && (
                                    <div className='flex items-center gap-[4px]'>
                                        <div className='w-[16px] h-[16px] rounded-full bg-[#10B981] flex items-center justify-center'>
                                            <Check className='w-[10px] h-[10px] text-white stroke-[2.5]' />
                                        </div>
                                        <span className='text-[14px] font-medium text-[#6B7280]'>Verified buyer</span>
                                    </div>
                                )}
                            </div>

                            {/* Review Text */}
                            <p className='text-[16px] text-[#6B7280] leading-[1.5] mb-[24px] flex-grow'>{testimonial.text}</p>
                        </div>

                    ))}
                </div>

                {/* Pagination Dots */}
                <div className='flex items-center justify-center gap-[8px]'>
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-[8px] h-[8px] rounded-full transition-colors duration-200 ${index === currentSlide ? 'bg-[#1F2937]' : 'bg-[#D1D5DB]'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
