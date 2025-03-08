/* eslint-disable @next/next/no-img-element */
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";

const Popularcategory = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 250,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1530,
        settings: {
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 1360,
        settings: {
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 760,
        settings: {
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
    ],
  };
  const CATEGORY_ARR = [
    {
      id: "1",
      name: "polos",
      imageUrl: "./product/p1.webp",
    },
    {
      id: "2",
      name: "Gifts",
      imageUrl: "./product/p2.webp",
    },
    {
      id: "3",
      name: "Hoodies & Jackets",
      imageUrl: "./product/p3.webp",
    },
    {
      id: "4",
      name: "T-shirts",
      imageUrl: "./product/p4.webp",
    },
    {
      id: "5",
      name: "Coffee Mugs",
      imageUrl: "./product/p5.webp",
    },
    {
      id: "6",
      name: "Category Six",
      imageUrl: "./product/p6.webp",
    },
    {
      id: "7",
      name: "Category Seven",
      imageUrl: "./product/p7.webp",
    },
  ];
  return (
    <section>
      <div className="main-container flex flex-col gap-10 top-spacing py-10">
        <article className="flex flex-col gap-1 items-center">
          <div className="w-full text-center">
          <div className="heading">
              Discover our popular <span className='text-black/45'>Categories</span>
            </div>
          </div>
          <p className="h-1 w-30 bg-blue-700 rounded-full"></p>
        </article>

        <div className="w-full flex justify-center items-center">
          <div className="md:w-[90%] w-full md:h-[25rem] h-full bg-white p-3 rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] flex md:flex-row flex-col items-center md:gap-0 gap-5">
            <div className="md:w-[35%] w-full h-full shadow-[0px_0px_5px_0.5px_#fed7e2]  bg-white rounded-xl flex flex-col  gap-5 items-center p-3">
              <p className=" flex flex-col items-center w-full md:h-[20%] h-fit">
                <span className=" font-semibold  text-xl text-secondary/60">
                  TASTY & FLAVOURFUL
                </span>
                <span className=" font-semibold  text-xl text-secondary/60">
                  CLAY POT
                </span>
                <span className="w-32 h-[0.05rem] bg-secondary"></span>
              </p>
              <div className="w-full h-[80%]">
                <img
                  src="./product/category1.webp"
                  className="h-full w-full object-cover rounded-xl"
                  alt=""
                />
              </div>
            </div>
            <div className="md:w-[65%] w-full h-[80%] flex flex-col gap-1">
              <div className="w-full flex justify-between h-full md:px-5">
                <p className=" md:text-2xl text-xs font-semibold  text-secondary/70 tracking-wider">
                  Good Clay Pot for Nutritious Cooking
                </p>
              </div>
              <div className="">
                <Slider {...settings} className="">
                  {
                  CATEGORY_ARR.map((curElm) => (
                    <article
                      className="shadow-black/45 mx-3"
                      key={curElm.id}
                    >
                      <NavLink to="/product" className="">
                        <div className="">
                          <img 
                            src={curElm.imageUrl} 
                            alt="" 
                            className="w-full aspect-squre"
                            />
                            <p className="text-xl font-semibold text-center capitalize">{curElm.name}</p>
                        </div>
                      </NavLink>
                    </article>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popularcategory;
