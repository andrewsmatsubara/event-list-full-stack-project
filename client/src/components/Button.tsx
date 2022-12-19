import styled from 'styled-components';

export const Button = styled.button`
  background-color: #CC5A71;
  width: 100px;
  height: 50px;
  border-radius: 10px;
  font-size: 20px;
  color: white;
  border: none;
  cursor: pointer;
  transition: transform .2s;

  &:hover {
    transform: scale(1.1);
  }
`;