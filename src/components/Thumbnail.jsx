import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

import { BsPlayCircleFill } from 'react-icons/bs';
import { HiCamera } from 'react-icons/hi';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const contents = [
  {
    type: 'BOLA',
    date: 'Rabu, 30 Maret 2020',
    title:
      'Gara-Gara Santiago bernabeu, el real batal datangkan Cristiano Ronaldo',
    img: 'thumbnail-1.jpg',
  },
  {
    type: 'BOLA',
    date: 'Rabu, 30 Maret 2020',
    title: 'Pangeran biru ingin terus ikuti piala menpora',
    img: 'thumbnail-2.jpg',
  },
  {
    type: 'SPORTAINMENT',
    date: 'Rabu, 30 Maret 2020',
    title:
      'Bambang Pamungkas, Legenda Sepanjang Masa Persija dan Timnas Indonesia',
    img: 'thumbnail-3.jpg',
  },
  {
    type: 'PHOTO',
    date: 'Rabu, 30 Maret 2020',
    title: 'Ketenaran Pevoli Cantik Sabina Altynbekova Sempat Bikin Khawatir',
    img: 'thumbnail-4.jpg',
  },
  {
    type: 'BALAP',
    date: 'Rabu, 30 Maret 2020',
    title: 'Jelang Seri Kedua MotoGP 2021: Rossi dan Morbidelli Sibuk',
    img: 'thumbnail-5.jpg',
  },
  {
    type: 'VIDEO',
    date: 'Rabu, 30 Maret 2020',
    title: 'Phoenix Suns Pecundangi Hornets',
    img: 'thumbnail-6.jpg',
  },
];

const Thumbnail = () => {
  return (
    <div className="bg-[#070d59] py-6">
      <div className="max-w-6xl mx-auto hidden sm:flex">
        <div className="">
          <div className="grid grid-cols-3 grid-flow-row gap-4">
            <div className="col-span-2">
              <div className="relative cursor-pointer group overflow-hidden">
                <img
                  src="/src/assets/images/thumbnail-1.jpg"
                  alt="thumbnail 1"
                  className="h-full w-full object-cover group-hover:scale-110 transition-all duration-300"
                />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#070d59] to-transparent" />

                <div className="absolute top-4 left-4 p-2 rounded-full bg-red-400 text-white text-2xl">
                  <BsPlayCircleFill />
                </div>

                <div className="absolute bottom-0 left-0 px-8 pb-8 flex flex-col gap-4 text-white">
                  <div className="flex gap-4 items-center ">
                    <span className="py-1 px-3 bg-red-600">BOLA</span>
                    <p className="text-xs ">Rabu, 23 Maret 2020</p>
                  </div>

                  <h1 className="text-3xl font-bold capitalize group-hover:text-red-600">
                    Gara-Gara Santiago bernabeu, el real batal datangkan
                    Cristiano Ronaldo
                  </h1>

                  <p className="text-lg">
                    SPANYOL - Presiden Real Madrid, Ramon Calderon, agak ragu
                    mantan timnya belanja jorjoran pada bursa transfer musim
                    panas 2021
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-rows-2">
              <div className="relative w-full h-[90%] cursor-pointer group overflow-hidden">
                <img
                  src="/src/assets/images/thumbnail-2.jpg"
                  alt="thumbnail 1"
                  className="h-full w-full object-cover group-hover:scale-110 transition-all duration-300"
                />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#070d59] to-transparent" />

                <div className="absolute bottom-0 left-0 px-8 pb-2 flex flex-col gap-1 text-white">
                  <div className="flex gap-4 items-center ">
                    <span className="py-1 px-3 bg-red-600">BOLA</span>
                    <p className="text-xs ">Rabu, 23 Maret 2020</p>
                  </div>

                  <p className="text-red-600 font-medium">
                    Persib VS Persiraja
                  </p>

                  <p className="text-lg font-medium capitalize group-hover:text-red-600">
                    Pangeran biru ingin terus ikuti piala menpora
                  </p>
                </div>
              </div>

              <div className="relative w-full h-[90%] cursor-pointer group overflow-hidden">
                <img
                  src="/src/assets/images/thumbnail-3.jpg"
                  alt="thumbnail 1"
                  className="h-full w-full object-cover group-hover:scale-110 transition-all duration-300"
                />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#070d59] to-transparent" />

                <div className="absolute bottom-0 left-0 px-8 pb-2 flex flex-col gap-1 text-white">
                  <div className="flex gap-4 items-center ">
                    <span className="py-1 px-3 bg-red-600">SPORTAINMENT</span>
                    <p className="text-xs ">Rabu, 30 Maret 2020</p>
                  </div>

                  <p className="text-lg font-medium group-hover:text-red-600">
                    Bambang Pamungkas, Legenda Sepanjang Masa Persija dan Timnas
                    Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 grid-flow-row gap-4">
            <div className="relative w-full cursor-pointer group overflow-hidden">
              <img
                src="/src/assets/images/thumbnail-4.jpg"
                alt="thumbnail 1"
                className="h-full w-full object-cover group-hover:scale-110 transition-all duration-300"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#070d59] to-transparent" />

              <div className="absolute top-4 left-4 p-1 rounded-full bg-red-400 text-white text-xl">
                <HiCamera />
              </div>

              <div className="absolute bottom-0 left-0 px-8 pb-2 flex flex-col gap-1 text-white">
                <div className="flex gap-4 items-center ">
                  <span className="py-1 px-3 bg-red-600">PHOTO</span>
                  <p className="text-xs ">Rabu, 30 Maret 2020</p>
                </div>

                <p className="text-lg font-medium group-hover:text-red-600">
                  Ketenaran Pevoli Cantik Sabina Altynbekova Sempat Bikin
                  Khawatir
                </p>
              </div>
            </div>
            <div className="relative w-full cursor-pointer group overflow-hidden">
              <img
                src="/src/assets/images/thumbnail-5.jpg"
                alt="thumbnail 1"
                className="h-full w-full object-cover group-hover:scale-110 transition-all duration-300"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#070d59] to-transparent" />

              <div className="absolute bottom-0 left-0 px-8 pb-2 flex flex-col gap-1 text-white">
                <div className="flex gap-4 items-center ">
                  <span className="py-1 px-3 bg-red-600">BALAP</span>
                  <p className="text-xs ">Rabu, 30 Maret 2020</p>
                </div>

                <p className="text-lg font-medium group-hover:text-red-600">
                  Jelang Seri Kedua MotoGP 2021: Rossi dan Morbidelli Sibuk
                </p>
              </div>
            </div>

            <div className="relative w-full cursor-pointer group overflow-hidden">
              <img
                src="/src/assets/images/thumbnail-6.jpg"
                alt="thumbnail 1"
                className="h-full w-full object-cover group-hover:scale-110 transition-all duration-300"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#070d59] to-transparent" />
              <div className="absolute top-4 left-4 p-2 rounded-full bg-red-400 text-white text-xl">
                <BsPlayCircleFill />
              </div>

              <div className="absolute bottom-0 left-0 px-8 pb-2 flex flex-col gap-1 text-white">
                <div className="flex gap-4 items-center ">
                  <span className="py-1 px-3 bg-red-600">Video</span>
                  <p className="text-xs">Rabu, 30 Maret 2020</p>
                </div>

                <p className="text-lg font-medium group-hover:text-red-600">
                  Phoenix Suns Pecundangi Hornets
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE VERSION */}
      <div className="px-4 mx-auto sm:hidden">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {contents.map((content, index) => (
            <SwiperSlide key={`content-thumbnail-${index}`}>
              <div className="relative w-full">
                <img
                  src={`/src/assets/images/${content.img}`}
                  alt={content.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#070d59] to-transparent" />

                <div className="absolute bottom-0 left-0 px-8 pb-2 flex flex-col gap-1 text-white">
                  <div className="flex gap-4 items-center ">
                    <span className="py-1 px-3 bg-red-600">{content.type}</span>
                    <p className="text-xs">{content.date}</p>
                  </div>

                  <p className="text-lg font-medium ">{content.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Thumbnail;
