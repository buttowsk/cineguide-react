import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  height: 100%;
  background: ${ ({ poster }) => `url(${ poster })` };
  border-radius: 10px;
`;

export const Name = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  display: inline;
  ${ ({ isSelected }) => isSelected && `
    display: inline-block;
    padding: 0.5rem;
  ` }
`;


