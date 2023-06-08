import React, { useEffect, useState } from 'react';
import { BsCalendarCheck, BsPlayCircleFill } from 'react-icons/bs';
import { HiCamera } from 'react-icons/hi';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

const similarNews = [
  {
    title: 'Anthony Ginting Ungkap Sisi Positif Indonesia Badminton',
    img: 'similar-news-1.jpg',
  },
  {
    title:
      'Jonatan Christie Soroti Venue Practice Hall Jelang Indonesia Badminton Festival',
    img: 'similar-news-2.jpg',
  },
  {
    title: 'Jelang Indonesia Masters 2021, The Daddies Akui',
    img: 'similar-news-3.jpg',
  },
  {
    title: 'Jonatan Cristie Bersyukur Cederanya Berangsur Pulih',
    img: 'similar-news-4.jpg',
  },
  {
    title:
      'Jonatan Christie Soroti Venue Practice Hall Jelang Indonesia Badminton Festival',
    img: 'similar-news-2.jpg',
  },
];
const mostPopulars = [
  {
    title: 'Jadwal MotoGP Doha 2021: Valentino Rossi Memble Lagi?',
    date: '31 Maret 2021',
    img: 'most-popular-1.jpg',
  },
  {
    title:
      'Hasil Positif di Seri Perdana Bikin Bagnaia Optimis Tatap MotoGP Doha 2021',
    date: '29 Maret 2021',
    img: 'most-popular-2.jpg',
  },
  {
    title: 'Hendra Setiawan Dkk Pulang ke Indonesia',
    date: '28 Maret 2021',
    img: 'most-popular-3.jpg',
  },
  {
    title: 'Gresia Polii Sampaikan Kritik Keras untuk BWF',
    date: '28 Maret 2021',
    img: 'most-popular-4.jpg',
  },
];
const multimedias = [
  {
    type: 'photo',
    title: 'IBL 2021: West Bandits Berhasil Balas Kakalahan atas NSH',
    date: '4 Menit lalu',
    img: 'most-popular-1.jpg',
  },
  {
    type: 'video',
    title: 'Hasil MotoGP Qatar 2021: Vinales Menangi Seri Perdana',
    date: '4 Menit lalu',
    img: 'most-popular-2.jpg',
  },
  {
    type: 'photo',
    title: 'Hendra Setiawan Dkk Pulang ke Indonesia',
    date: '4 Menit lalu',
    img: 'most-popular-3.jpg',
  },
  {
    type: 'photo',
    title: 'IBL 2021: West Bandits Berhasil Balas Kakalahan atas NSH',
    date: '4 Menit lalu',
    img: 'most-popular-1.jpg',
  },
  {
    type: 'video',
    title: 'Hasil MotoGP Qatar 2021: Vinales Menangi Seri Perdana',
    date: '4 Menit lalu',
    img: 'most-popular-2.jpg',
  },
  {
    type: 'photo',
    title: 'Hendra Setiawan Dkk Pulang ke Indonesia',
    date: '4 Menit lalu',
    img: 'most-popular-3.jpg',
  },
];
const editorChoices = [
  {
    title: 'Hasil Pertandingan NBA 2020-2021',
    date: '29 Maret 2021',
    img: 'editor-choice-1.jpg',
  },
  {
    title: 'Cristiano Ronaldo Tetap Jadi Teladan',
    date: '29 Maret 2021',
    img: 'editor-choice-2.jpg',
  },
  {
    title: 'Cari Ongkos untuk Olimpiade, Atlet Seksi ini Rela Jualan Pizza',
    date: '28 Maret 2021',
    img: 'editor-choice-3.jpg',
  },
  {
    title: 'Hasil Pertandingan NBA 2021-2022',
    date: '29 Maret 2021',
    img: 'editor-choice-1.jpg',
  },
];
const hotTopics = [
  {
    name: 'Sepak Bola',
  },
  {
    name: 'Moto GP',
  },
  {
    name: 'Bola Basket',
  },
  {
    name: 'Batminton',
  },
  {
    name: 'Tenis',
  },
  {
    name: 'Formula 1',
  },
];
const standingsData = [
  { team: 'Turkey', img: 'flag-turkey.png', played: 6, gd: 8, pts: 13 },
  { team: 'Italia', img: 'flag-italia.png', played: 6, gd: 2, pts: 10 },
  { team: 'Wales', img: 'flag-wales.png', played: 6, gd: -6, pts: 5 },
  {
    team: 'Switzerland',
    img: 'flag-switzerland.png',
    played: 6,
    gd: -4,
    pts: 5,
  },
];

const Content = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleMobileResponsive = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleMobileResponsive);

    handleMobileResponsive();
  }, []);
  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-0">
      <div className="sm:grid sm:grid-cols-4 sm:grid-flow-row gap-4">
        <div className="col-span-3">
          <div className="mb-4 ">
            <img
              src="/assets/images/content-1.JPG"
              alt="content img"
              className="w-full h-full object-contain"
            />
          </div>

          <section className="similar-news mb-4">
            <Swiper
              spaceBetween={10}
              slidesPerView={isMobile ? 2 : 4}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {similarNews.map((item, i) => (
                <SwiperSlide key={`similar-news-${i}`} className="">
                  <div className="w-full h-[130px]  relative group overflow-hidden cursor-pointer">
                    <img
                      src={`/assets/images/${item.img}`}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-150"
                    />

                    <div className="absolute bottom-0 left-0 w-full h-[70%] bg-gradient-to-t from-[#070d59] to-transparent" />

                    <div className="absolute bottom-0 left-0 p-2 px-3">
                      <h5 className="text-xs font-medium text-white group-hover:text-red-600 line-clamp-2">
                        {item.title}
                      </h5>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>

          <section className="latest-news mb-6">
            <h3 className="py-1 text-lg font-bold border-b-4 border-red-600">
              LATEST NEWS
            </h3>

            <Link
              to="#"
              className="flex flex-col sm:flex-row gap-4 py-6 border-b border-gray-300 group"
            >
              <div className="w-full sm:w-[25%] h-[180px]">
                <img
                  src="/assets/images/content-2.jpg"
                  alt="f1 hamilton"
                  className="w-full h-full object-cover group-hover:opacity-80 transition-all duration-300"
                />
              </div>

              <div className="w-full sm:w-[75%] flex flex-col gap-2 sm:gap-0 sm:justify-between">
                <h5 className="text-red-600 font-bold">F1</h5>

                <div className="flex gap-2 items-center text-xs text-gray-600">
                  <div className="rounded border border-dashed border-gray-500 p-1">
                    <BsCalendarCheck />
                  </div>
                  <p>31 Maret 2021</p>
                </div>

                <p className="text-red-600 font-medium text-sm">
                  Kualifikasi Piala Dunia 2022
                </p>

                <h3 className="text-xl font-bold group-hover:text-red-600 duration-100">
                  Hamilton Menangi Persaingan Sengit atas Verstappen
                </h3>
                <p className="text-sm">
                  Pembalap Tim Mercedes, Lewis Hamilton, tampil sebagai pemenang
                  diajang Formula One(F1) GP Bahrain 2021. Akan tetapi,
                  kemenangan ini tak didapat Hamilton dengan mudah karena ia
                  harus bersaing sengit dengan pembalap Red Bull, Max
                  Verstappen.
                </p>
              </div>
            </Link>

            <div className="py-6 border-b border-gray-300 hidden sm:flex">
              <div className=" w-full h-[500px] relative group overflow-hidden cursor-pointer">
                <img
                  src="/assets/images/content-3.jpg"
                  alt="Gp Sepang"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#070d59] to-transparent" />

                <div className="absolute bottom-0 left-0 px-8 pb-4 flex flex-col gap-4 text-white">
                  <div className="flex gap-4 items-center ">
                    <span className="py-1 px-3 bg-red-600">MOTO GP</span>
                    <p className="text-xs ">Rabu, 23 Maret 2020</p>
                  </div>

                  <p className="text-xs font-bold text-red-700">
                    GP Sepang 2021
                  </p>

                  <h1 className="text-3xl font-bold capitalize group-hover:text-red-600">
                    Disalip Jelang Finish, Joan Mir Hanya Bisa Tersenyum Getir
                  </h1>
                </div>
              </div>
            </div>
          </section>

          <section className="most-popular">
            <h3 className="py-1 text-lg font-bold border-b-4 border-red-600 mb-6">
              MOST POPULAR
            </h3>

            <div className="">
              <Swiper
                spaceBetween={10}
                slidesPerView={isMobile ? 2 : 4}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                {mostPopulars.map((item, i) => (
                  <SwiperSlide key={`most-popular-${i}`} className="">
                    <Link to="#" className="hover:text-red-600">
                      <div className="w-full h-[120px] mb-2">
                        <img
                          src={`/assets/images/${item.img}`}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex gap-2 items-center text-xs text-gray-600 mb-2">
                        <div className="rounded border border-dashed border-gray-500 p-1">
                          <BsCalendarCheck />
                        </div>
                        <p>{item.date}</p>
                      </div>

                      <h5 className="text-sm font-bold line-clamp-2">
                        {item.title}
                      </h5>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <Link
              to="#"
              className="flex flex-col sm:flex-row gap-4 py-6 border-b border-gray-300 group"
            >
              <div className="w-full sm:w-[25%] h-[180px]">
                <img
                  src="/assets/images/content-4.jpg"
                  alt="f1 hamilton"
                  className="w-full h-full object-cover group-hover:opacity-80 transition-all duration-300"
                />
              </div>

              <div className="w-full sm:w-[75%] flex flex-col gap-2 sm:gap-0 sm:justify-between">
                <h5 className="text-red-600 font-bold">Video</h5>

                <div className="flex gap-2 items-center text-xs text-gray-600">
                  <div className="rounded border border-dashed border-gray-500 p-1">
                    <BsCalendarCheck />
                  </div>
                  <p>28 Maret 2021</p>
                </div>

                <p className="text-red-600 font-medium text-sm">
                  Kualifikasi Piala Dunia 2022
                </p>

                <h3 className="text-xl font-bold group-hover:text-red-600 transition-all duration-300">
                  Pelita Jaya Tutup Putaran Kedua IBL 2021 dengan Kemenangan
                </h3>
                <p className="text-sm hidden sm:flex line-clamp-2">
                  Pelita Jaya Bakrie Sukses menunjukan performa mengesankan saat
                  menghadapi pemuncak klasemen IBL musim 2021 Divisi Merah,
                  Louvre Dewa United Surabaya pada laga penutup seri dua.
                </p>
              </div>
            </Link>
            <Link
              to="#"
              className="flex flex-col sm:flex-row gap-4 py-6 border-b border-gray-300 group"
            >
              <div className="w-full sm:w-[25%] h-[180px]">
                <img
                  src="/assets/images/content-4.jpg"
                  alt="f1 hamilton"
                  className="w-full h-full object-cover group-hover:opacity-80 transition-all duration-300"
                />
              </div>

              <div className="w-full sm:w-[75%] flex flex-col gap-2 sm:gap-0 sm:justify-between">
                <h5 className="text-red-600 font-bold">Video</h5>

                <div className="flex gap-2 items-center text-xs text-gray-600">
                  <div className="rounded border border-dashed border-gray-500 p-1">
                    <BsCalendarCheck />
                  </div>
                  <p>28 Maret 2021</p>
                </div>

                <p className="text-red-600 font-medium text-sm">
                  Kualifikasi Piala Dunia 2022
                </p>

                <h3 className="text-xl font-bold group-hover:text-red-600 transition-all duration-300">
                  Pelita Jaya Tutup Putaran Kedua IBL 2021 dengan Kemenangan
                </h3>
                <p className="text-sm hidden sm:flex line-clamp-2">
                  Pelita Jaya Bakrie Sukses menunjukan performa mengesankan saat
                  menghadapi pemuncak klasemen IBL musim 2021 Divisi Merah,
                  Louvre Dewa United Surabaya pada laga penutup seri dua.
                </p>
              </div>
            </Link>
          </section>

          <section className="multimedia bg-[#070d59] py-2 pb-4 px-4 mb-6 sm:mb-0">
            <h3 className="py-1 text-lg text-white font-bold border-b-4 border-red-600 mb-4">
              MULTIMEDIA
            </h3>

            <div className="">
              <Swiper
                spaceBetween={10}
                slidesPerView={isMobile ? 1 : 3}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                {multimedias.map((item, i) => (
                  <SwiperSlide
                    key={`multimedia-${i}`}
                    className="group overflow-hidden"
                  >
                    <Link to="#">
                      <div className="relative w-full h-[200px]">
                        <img
                          src={`/assets/images/${item.img}`}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-150"
                        />

                        <div className="absolute bottom-0 left-0 w-full h-[90%] bg-gradient-to-t from-black/60 to-transparent" />

                        {item.type === 'photo' ? (
                          <div className="absolute top-2 left-2 p-1 rounded-full bg-red-400 text-white text-xl">
                            <HiCamera />
                          </div>
                        ) : (
                          <div className="absolute top-2 left-2 p-1 rounded-full bg-red-400 text-white text-xl">
                            <BsPlayCircleFill />
                          </div>
                        )}

                        <div className="absolute bottom-0 left-0 px-2 pb-2">
                          <h5 className="text-xs font-bold text-white mb-2 group-hover:text-red-600">
                            {item.title}
                          </h5>

                          <div className="flex gap-2 items-center text-xs text-white">
                            <div className="rounded border border-dashed border-white p-1">
                              <BsCalendarCheck />
                            </div>
                            <p>{item.date}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>
        </div>

        {/* Right Content */}
        <aside className="content-right">
          <section className="editors-choice mb-4">
            <h3 className="py-1 text-lg font-bold border-b-4 border-red-600 ">
              EDITOR'S CHOICE
            </h3>

            <div className="py-4 border-b border-gray-300">
              <div className=" w-full h-[260px] relative group overflow-hidden cursor-pointer">
                <img
                  src="/assets/images/content-5.jpg"
                  alt="Gp Sepang"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-black to-transparent" />

                <div className="absolute bottom-0 left-0 px-4 pb-2 flex flex-col gap-4 text-white">
                  <div className="flex gap-4 items-center ">
                    <span className="py-1 px-2 bg-red-600 text-xs">
                      MOTO GP
                    </span>
                  </div>

                  <h1 className="text-base group-hover:text-red-600">
                    Bangga, Zarco Bongkar Rahasianya Pecahkan Rekor Top Speed
                    MotoGP
                  </h1>
                </div>
              </div>
            </div>

            {editorChoices.map((item, index) => (
              <Link
                to="#"
                key={`editor-choice-${index}`}
                className="py-4 border-b border-gray-300 flex gap-4 hover:opacity-80 transition-all duration-300"
              >
                <div className="w-[34%] h-[70px]">
                  <img
                    src={`/assets/images/${item.img}`}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="w-[66%]">
                  <h5 className="text-sm font-medium">{item.title}</h5>

                  <div className="flex gap-2 items-center text-xs text-gray-600 mb-2">
                    <div className="rounded border border-dashed border-gray-500 p-1">
                      <BsCalendarCheck />
                    </div>
                    <p>{item.date}</p>
                  </div>
                </div>
              </Link>
            ))}
          </section>

          <section className="hot-topics mb-4">
            <h3 className="py-1 text-lg font-bold border-b-4 border-red-600 mb-4">
              HOT TOPICS
            </h3>

            <ul>
              {hotTopics.map((item, index) => (
                <li
                  key={`hotTopics-${index}`}
                  className={`${
                    index % 2 === 0 ? 'bg-[#182366]' : 'bg-[#24326f]'
                  } p-3 text-white text-xs font-medium flex gap-2 items-center`}
                >
                  <IoIosArrowForward className="text-sm" />{' '}
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="statistik">
            <div className="py-1 flex justify-between items-center border-b-4 border-red-600 sm:mb-4 mb-2">
              <h3 className="text-lg font-bold">STATISTIK</h3>
              <Link to="/statistik-detail" className="text-sm sm:hidden">
                Lihat Detail
              </Link>
              <select
                name="statistik"
                id="statistik"
                className="p-1 rounded-md border border-gray-600 text-xs font-medium outline-none hidden sm:flex"
              >
                <option value="euro-2021">EURO 2021</option>
                <option value="euro-2021">AFC 2021</option>
                <option value="euro-2021">UEFA 2021</option>
                <option value="premier-league">Premier League</option>
                <option value="serie-a">Serie A</option>
                <option value="la-liga">La Liga</option>
                <option value="bundesliga">Bundesliga</option>
                <option value="ligue-1">Ligue 1</option>
              </select>
            </div>

            <div className="flex justify-between items-center sm:hidden mb-4">
              <select
                name="statistik"
                id="statistik"
                className="p-1 rounded-md border border-gray-600 text-xs font-medium outline-none  "
              >
                <option value="euro-2021">EURO 2021</option>
                <option value="euro-2021">AFC 2021</option>
                <option value="euro-2021">UEFA 2021</option>
                <option value="premier-league">Premier League</option>
                <option value="serie-a">Serie A</option>
                <option value="la-liga">La Liga</option>
                <option value="bundesliga">Bundesliga</option>
                <option value="ligue-1">Ligue 1</option>
              </select>

              <div className="flex gap-4">
                <div className="bg-[#182366] p-2 rounded-full text-white">
                  <IoIosArrowBack />
                </div>
                <div className="bg-[#182366] p-2 rounded-full text-white">
                  <IoIosArrowForward />
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-bold text-sm">GROUP A</h4>
              <table className="min-w-full bg-white border border-gray-300 text-sm font-medium">
                <thead className="bg-[#182366] text-white ">
                  <tr>
                    <th className="py-2 px-2 border-b text-left">Rank</th>
                    <th className="py-2 px-2 border-b">P</th>
                    <th className="py-2 px-2 border-b">GD</th>
                    <th className="py-2 px-2 border-b">Pts</th>
                  </tr>
                </thead>
                <tbody>
                  {standingsData.map((item, index) => (
                    <tr key={index} className="">
                      <td className="py-2 px-2 flex gap-2">
                        <span>{index + 1}</span>
                        <div className="w-4 h-4">
                          <img
                            src={`/assets/images/${item.img}`}
                            alt={item.team}
                            className="w-full h-full object-cover "
                          />
                        </div>
                        {item.team}
                      </td>
                      <td className="py-2 px-2 text-center">{item.played}</td>
                      <td
                        className={`py-2 px-2 text-center ${
                          item.gd < 0 ? 'text-red-600' : ''
                        }`}
                      >
                        {item.gd}
                      </td>
                      <td className="py-2 px-2 text-center">{item.pts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="hidden sm:flex sm:flex-col">
              <h4 className="font-bold text-sm">GROUP B</h4>
              <table className="min-w-full bg-white border border-gray-300 text-sm font-medium">
                <thead className="bg-[#182366] text-white ">
                  <tr>
                    <th className="py-2 px-2 border-b text-left">Rank</th>
                    <th className="py-2 px-2 border-b">P</th>
                    <th className="py-2 px-2 border-b">GD</th>
                    <th className="py-2 px-2 border-b">Pts</th>
                  </tr>
                </thead>
                <tbody>
                  {standingsData.map((item, index) => (
                    <tr key={index} className="">
                      <td className="py-2 px-2 flex gap-2">
                        <span>{index + 1}</span>
                        <div className="w-4 h-4">
                          <img
                            src={`/assets/images/${item.img}`}
                            alt={item.team}
                            className="w-full h-full object-cover "
                          />
                        </div>
                        {item.team}
                      </td>
                      <td className="py-2 px-2 text-center">{item.played}</td>
                      <td
                        className={`py-2 px-2 text-center ${
                          item.gd < 0 ? 'text-red-600' : ''
                        }`}
                      >
                        {item.gd}
                      </td>
                      <td className="py-2 px-2 text-center">{item.pts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default Content;
