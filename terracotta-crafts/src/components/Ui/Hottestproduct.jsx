import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
const Hottestproduct = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll:4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay: true,
          autoplaySpeed: 3000,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
    autoplaySpeed: 3000,
        }
      }
    ]
  };
  const CATEGORY_ARR = [
    {
      id: "1",
      name: "Home fragnance products",
      imageUrl: "https://res.cloudinary.com/dxm4zavaw/image/upload/v1712664002/category/images%20%283%29.jpeg.jpg",
    },
    {
      id: "2",
      name: "Cookware",
      imageUrl: "https://res.cloudinary.com/dxm4zavaw/image/upload/v1712573646/category/category1.webp.webp",
    },
    {
      id: "3",
      name: "Handi cookware",
      imageUrl: "https://res.cloudinary.com/dxm4zavaw/image/upload/v1712663556/category/download%20%284%29.jpeg.jpg",
    },
    {
      id: "4",
      name: "Incense holder",
      imageUrl: "https://res.cloudinary.com/dxm4zavaw/image/upload/v1712663426/category/download%20%282%29.jpeg.jpg",
    },
    {
      id: "5",
      name: "Clay god statue",
      imageUrl: "https://res.cloudinary.com/dxm4zavaw/image/upload/v1712663715/category/images%20%282%29.jpeg.jpg",
    },
    {
      id: "6",
      name: "Kitchen Essentials",
      imageUrl:"https://res.cloudinary.com/dxm4zavaw/image/upload/v1712663116/category/download1.jpeg.jpg",
    },
    {
      id: "7",
      name: "Decorative Ornaments",
      imageUrl: "https://res.cloudinary.com/dxm4zavaw/image/upload/v1712664123/category/images%20%284%29.jpeg.jpg"

    },
  ];
  return (
    <section className='main-container h-[60vh] relative'>
        <article className="flex flex-col gap-1 items-center">
              <div className="w-full text-center">
              <div className="heading">
              Browse Our Hottest <span className='text-black/45'>Categories</span>
                </div>
              </div>
              <p className="h-1 w-30 bg-blue-700 rounded-full  mb-12"></p>
        </article>
        <div className="">
          <Slider {...settings} className="bg-white/40">
            {
              CATEGORY_ARR.map((element) => {
                return(
                  <div key={element.id} className="ml-3.5 flex flex-col justify-center items-center group">
                     <div className="flex flex-col items-center justify-center z-0 border-[1px] border-slate-50">
                      <img 
                        src = {element.imageUrl} 
                        className="w-50 aspect-square object-containt text-center ease-in-out duration-500 group-hover:scale-105 rounded-lg"
                        />
                        <p className="text-xl font-semibold text-center my-6">{element.name}</p>
                     </div>
                     <NavLink to="/product" className='flex flex-row justify-center items-center my-3'>
                      <FaArrowRight className='text-center text-2xl text-blue-700 absolute bottom-[-30px]   z-50 ease-in-out duration-500 group-hover:bottom-[-2px]'/>
                      </NavLink>
                  </div>
                )
              })
            }
          </Slider>
        </div> 
    </section>
  )
}

export default Hottestproduct