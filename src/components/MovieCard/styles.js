import styled from 'styled-components';

export const Card = styled.div`
  background: ${ ({ poster }) => `url(${ poster }) no-repeat center center / cover` };
  border-radius: 10px;
  max-width: 350px;
  flex: 1 0 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 1rem;
`;

export const Name = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #fff;
  display: inline;
  backdrop-filter: blur(5px);
  background-color: rgba(52, 67, 107, 0.7);
  padding: 0.5rem 1rem;
  border-radius: 10px;
  ${ ({ isSelected }) => isSelected && `
    display: inline-block;
    padding: 0.5rem;
  ` }

`;


