import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  width: 100%;
  height: 100%;
`;


export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  width: 100%;
  height: 50%;
  padding: 1rem;
  background: ${ ({ poster }) => `url(${ poster }) no-repeat center center` };
  background-size: auto;
  border-radius: 10px;
  color: #000;
  z-index: 0;
`;



export const CarouselContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 70%;
  height: 30%;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
`;