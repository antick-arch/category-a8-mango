"use client";
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const reviews = [
  { name: "Rahim Uddin", role: "University Student", rating: 5, text: "I borrowed three textbooks in one evening without leaving my room. Super smooth!" },
  { name: "Nusrat Jahan", role: "Fiction Lover", rating: 5, text: "The search and category filter helped me find my next novel in seconds." },
  { name: "Tanvir Ahmed", role: "Software Developer", rating: 4, text: "Great tech collection and a clean interface. Exactly what a digital library should be." },
  { name: "Ayesha Siddika", role: "School Teacher", rating: 5, text: "My students use it daily. Simple to use on a phone, and the book details are clear." },
];
const Testimonials = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">What Our Readers Say</h2>
        <p className="mt-2 text-base-content/70">Real words from our growing reading community.</p>

        <Swiper
          className="mt-10 pb-12"
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((r) => (
            <SwiperSlide key={r.name} className="!h-auto">
              <div className="card bg-base-100 border border-base-300 shadow-sm h-full">
                <div className="card-body items-center text-center">
                  <div className="avatar avatar-placeholder">
                    <div className="bg-primary text-primary-content w-14 rounded-full">
                      <span className="text-xl">{r.name[0]}</span>
                    </div>
                  </div>
                  <div className="text-warning text-lg">
                    {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
                  </div>
                  <p className="text-base-content/80 italic">"{r.text}"</p>
                  <h3 className="font-semibold mt-2">{r.name}</h3>
                  <span className="text-sm text-base-content/60">{r.role}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;