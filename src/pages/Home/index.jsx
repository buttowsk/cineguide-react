import { useMovies } from '../../hooks/useMovies/index.js';
import { Container, CarouselContainer, MovieInfo, Content } from './styles.js';
import { SwiperComponent } from './components/swiper.jsx';
import { useState } from 'react';
import { Header } from '../../components/Header/index.jsx';


export const Home = () => {
  const { movies, loading } = useMovies();
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };

  if (loading) {
    return <p>Loading...</p>;
  }


  return (
    <Container>
      <Header/>
      <Content>
        <MovieInfo poster={ movies[currentSlide]?.backdrop }>
          <h1>{ movies[currentSlide]?.title }</h1>
          <p>{ movies[currentSlide]?.overview }</p>
        </MovieInfo>
        <CarouselContainer>
          <SwiperComponent movies={ movies } handleSlideChange={ handleSlideChange }/>
        </CarouselContainer>
      </Content>
    </Container>
  );
};