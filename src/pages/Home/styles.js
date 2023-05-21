import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 1rem;
  height: 100vh;
  overflow: hidden;
`;


export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  width: 100%;
  height: 70%;
  padding: 1rem;
  background: ${ ({ poster }) => `url(${ poster }) no-repeat center center` };
  background-size: auto;
  border-radius: 10px;
  backdrop-filter: blur(5px);
  color: #000;
`;



export const CarouselContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 70%;
  height: 30%;
`;