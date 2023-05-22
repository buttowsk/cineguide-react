import { Container, Logo, Nav, NavItem, NavText, SearchBar } from './styles.js';

export const Header = () => {
  return (
    <Container>
      <Logo/>
      <SearchBar placeholder="Pesquisar"/>
      <Nav>
        <NavItem>
          <NavText>Home</NavText>
        </NavItem>
        <NavItem>
          <NavText>Minha Lista</NavText>
        </NavItem>
        <NavItem>
          <NavText>Categorias</NavText>
        </NavItem>
      </Nav>
    </Container>
  );
}