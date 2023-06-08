import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const schedules = [
  {
    title: 'Piala Dunia',
    date: 'Rabu, 31 Maret  2021',
    versus: [
      {
        national: 'BELGIUM',
        flag: 'belgium',
        score: 0,
      },
      {
        national: 'FRANCE',
        flag: 'france',
        score: 0,
      },
    ],
  },
  {
    title: 'Piala Dunia',
    date: 'Rabu, 31 Maret  2021',
    versus: [
      {
        national: 'NETHERLAND',
        flag: 'netherland',
        score: 0,
      },
      {
        national: 'ITALIA',
        flag: 'italia',
        score: 0,
      },
    ],
  },
  {
    title: 'Piala Dunia',
    date: 'Rabu, 31 Maret  2021',
    versus: [
      {
        national: 'GERMANY',
        flag: 'germany',
        score: 0,
      },
      {
        national: 'PORTUGAL',
        flag: 'portugal',
        score: 0,
      },
    ],
  },
  {
    title: 'Piala Dunia',
    date: 'Rabu, 31 Maret  2021',
    versus: [
      {
        national: 'BELGIUM',
        flag: 'belgium',
        score: 0,
      },
      {
        national: 'FRANCE',
        flag: 'france',
        score: 0,
      },
    ],
  },
  {
    title: 'Piala Dunia',
    date: 'Rabu, 31 Maret  2021',
    versus: [
      {
        national: 'BELGIUM',
        flag: 'belgium',
        score: 0,
      },
      {
        national: 'FRANCE',
        flag: 'france',
        score: 0,
      },
    ],
  },
  {
    title: 'Piala Dunia',
    date: 'Rabu, 31 Maret  2021',
    versus: [
      {
        national: 'NETHERLAND',
        flag: 'netherland',
        score: 0,
      },
      {
        national: 'ITALIA',
        flag: 'italia',
        score: 0,
      },
    ],
  },
  {
    title: 'Piala Dunia',
    date: 'Rabu, 31 Maret  2021',
    versus: [
      {
        national: 'GERMANY',
        flag: 'germany',
        score: 0,
      },
      {
        national: 'PORTUGAL',
        flag: 'portugal',
        score: 0,
      },
    ],
  },
  {
    title: 'Piala Dunia',
    date: 'Rabu, 31 Maret  2021',
    versus: [
      {
        national: 'BELGIUM',
        flag: 'belgium',
        score: 0,
      },
      {
        national: 'FRANCE',
        flag: 'france',
        score: 0,
      },
    ],
  },
];

const ScheduleResult = () => {
  const [selectedLeague, setSelectedLeague] = useState('');
  const swiper = useRef();
  const [realSlide, setRealSlide] = useState(0);

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

  const handlePrev = useCallback(() => {
    swiper?.current?.slidePrev();
  }, [swiper, realSlide]);

  const handleNext = useCallback(() => {
    swiper?.current?.slideNext();
  }, [swiper, realSlide]);

  const handleLeagueChange = (e) => {
    setSelectedLeague(e.target.value);
  };

  return (
    <div className="max-w-6xl px-4 sm:px-0 mx-auto py-4 flex flex-col sm:flex-row">
      <div className="sm:w-[10%] flex flex-row sm:flex-col gap-3 sm:gap-0 mb-4 sm:mb-0">
        <h3 className="font-bold text-xl uppercase">Jadwal & Hasil</h3>

        <select
          className="border-none outline-none sm:text-xs bg-transparent cursor-pointer"
          value={selectedLeague}
          onChange={handleLeagueChange}
        >
          <option value="">Jadwal Terbaru</option>
          <option value="premier-league">Premier League</option>
          <option value="serie-a">Serie A</option>
          <option value="la-liga">La Liga</option>
          <option value="bundesliga">Bundesliga</option>
          <option value="ligue-1">Ligue 1</option>
        </select>
      </div>

      <div className="w-full sm:w-[90%] flex">
        <div className="w-[90%] sm:w-[95%]">
          <Swiper
            className="swiper-schedule"
            modules={[Navigation]}
            slidesPerView={isMobile ? 2 : 5}
            onSlideChange={(s) => setRealSlide(s.realIndex)}
            onSwiper={(s) => {
              swiper.current = s;
            }}
          >
            {schedules.map((schedule, index) => (
              <SwiperSlide key={`schedule-${index}`}>
                <div className="px-2 w-full h-full border-r border-gray-300">
                  <div className="text-xs font-medium">
                    <p>{schedule.title}</p>
                    <p className="text-red-500 mb-2">{schedule.date}</p>
                  </div>

                  {schedule.versus.map((item, i) => (
                    <div
                      key={`versus-${i}`}
                      className="flex gap-4 items-center font-medium text-sm mb-2"
                    >
                      <div className="w-5 h-5">
                        <img
                          src={`/src/assets/images/flag-${item.flag}.png`}
                          alt="flag belgia"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p>{item.national.slice(0, 3)}</p>
                      <p className="ml-auto mr-3">0</p>
                    </div>
                  ))}

                  <p className="text-blue-900 text-sm font-bold">Pre Match</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="w-[10%] sm:w-[5%] flex items-center ">
          <div className="border-r border-gray-300 flex flex-col text-4xl">
            <button
              onClick={handleNext}
              className="hover:text-red-500 transition-all duration-200"
            >
              <IoIosArrowForward />
            </button>

            <button
              onClick={handlePrev}
              className="hover:text-red-500 transition-all duration-200"
            >
              <IoIosArrowBack />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleResult;
