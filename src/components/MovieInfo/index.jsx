import {
  SecondRow,
  Container,
  FirstRow,
  Duration,
  Genre,
  Rating,
  MovieName,
  ReleaseDate,
  Classification,
} from './styles.js';


export const MovieInfo = ({ movie }) => {
  return (
    <Container>
      <MovieName>{ movie.title }</MovieName>
      <FirstRow>
        <Rating>{ movie.rating }</Rating>
        <Classification>{ movie.classification }</Classification>
      </FirstRow>
      <SecondRow>
        <Duration>{ movie.duration }</Duration>
        <Genre>{ movie.genre }</Genre>
        <ReleaseDate>{ movie.releaseDate }</ReleaseDate>
      </SecondRow>
    </Container>
  );
};