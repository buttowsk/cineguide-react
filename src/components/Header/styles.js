import styled from 'styled-components';
import logo from '../../assets/logo.svg';


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.75rem;
  background-color: #30655e;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const Logo = styled.img.attrs({
  src: `${logo}`,
  alt: 'Logo do Cineguide',
})`
    width: 80px;
    height: 80px;
    object-fit: contain;

  `;


export const SearchBar = styled.input`
  width: 50%;
  height: 40px;
  border-radius: 5px;
  border: none;
  padding: 0 1rem;
  font-size: 1rem;

  &:focus, &:active {
    border: 1px solid #ec4545;
  }
`;


export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: #ec4545;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #000;
  }
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  height: 100%;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background-color: #ec4545;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #000;
  }
`;

export const NavText = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #ec4545;
  }
`;