import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "./blogs.css";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const blogs = [
  {
    title: "The One Part of the Vision Pro That Apple Doesn’t Want You to See",
    image: "/blog1.png",
    tag: ["product"]
  },
  {
    title: "The One Part of the Vision Pro That Apple Doesn’t Want You to See",
    image: "/blog1.png",
    tag: ["Technology","product"]
  },
  {
    title: "The One Part of the Vision Pro That Apple Doesn’t Want You to See",
    image: "/blog1.png",
    tag: ["product"]
  },
  {
    title: "The One Part of the Vision Pro That Apple Doesn’t Want You to See",
    image: "/blog1.png",
    tag: ["Technology","product"]
  },
  {
    title: "The One Part of the Vision Pro That Apple Doesn’t Want You to See",
    image: "/blog1.png",
    tag: ["product"]
  },
  {
    title: "Intel’s CEO Says AI Is the Key to the Company’s Comeback",
    image: "/blog2.png",
    tag: ["Technology","product"]
  },
  {
    title: "Polar ID Is the Face ID Rival for Android Phones",
    image: "/blog3.png",
    tag: ["product"]
  }
];

console.log(blogs)

export default function Blogs() {
  return (
    <div className="blog-section">

      <div className="content">
        <h2 className="blog-title">Our Latest Blog and News</h2>
        <div className="para-content">
            <p className="">Delve into real-world examples where our Technology  <br />
                Solutions, Consulting and Strategy,
            </p>
            <div className="btns">
                <button className="prev-btn"><FaArrowLeft /></button>
                <button className="next-btn"><FaArrowRightLong /></button>
            </div>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
    prevEl: ".prev-btn",
    nextEl: ".next-btn",
  }}
        spaceBetween={30}
        slidesPerView={3}

        breakpoints={{
          320: {
            slidesPerView: 1
          },
          640: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 3
          }
        }}
      >
        {blogs.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="blog-card">

              <div>
                <div className="box">
    {item?.tag?.map((tag, index) => (
      <div className="elem" key={index}>
        {tag}
      </div>
    ))}
  </div>
            
                <img src={item.image} alt="" />
              </div>

              <h3>{item.title}</h3>

              <p className="read-more">
                Read More →
              </p>

            </div>
          </SwiperSlide>
        ))}

      </Swiper>

    </div>
  );
}