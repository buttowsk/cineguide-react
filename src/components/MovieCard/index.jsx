import { Card, Name } from './styles';

export const MovieCard = ({ movie }) => {
  return (
    <Card>
      <img src={ movie.poster } alt={ movie.title }/>
      <Name>{ movie.title }</Name>
    </Card>
  );
};