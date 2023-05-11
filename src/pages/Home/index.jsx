import { MovieCard } from '../../components/MovieCard/index.jsx';
import { MovieInfo } from '../../components/MovieInfo/index.jsx';

export const Home = () => {
  const movie = {
    title: 'The Green Mile',
    poster: 'https://images-na.ssl-images-amazon.com/images/I/51oDs32SXlL._AC_.jpg',
    rating: '9.5',
    classification: '16',
    duration: '3h 9min',
    genre: 'Crime, Drama, Fantasy',
    releaseDate: '27 November 1999',
  };
  return (
    <div>
      <MovieInfo movie={ movie }/>
      <MovieCard movie={ movie }/>
    </div>
  );
};