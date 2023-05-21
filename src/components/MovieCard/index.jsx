import { Card, Name } from './styles';

export const MovieCard = ({ movie }) => {
  return (
    <Card poster={ movie.backdrop }>
      <Name>{ movie.title }</Name>
    </Card>
  );
};