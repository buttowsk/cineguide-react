import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { MovieCard } from '../../../components/MovieCard/index.jsx';

export const SwiperComponent = ({ movies, handleSlideChange }) => {

  return (
      <Swiper
        effect={ 'coverflow' }
        centeredSlides={ true }
        grabCursor={ true }
        modules={ [Navigation, EffectCoverflow] }
        coverflowEffect={ {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        } }
        navigation={ true }
        slidesPerView={ 3 }
        onSlideChange={ handleSlideChange }
      >
        { movies.map((movie) => (
          <SwiperSlide key={ movie.id }>
            <MovieCard movie={ movie }/>
          </SwiperSlide>
        )) }
      </Swiper>
  );
};
