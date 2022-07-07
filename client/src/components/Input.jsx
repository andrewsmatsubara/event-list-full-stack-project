import styled from "styled-components"

export const Input = styled.input`
  border: #CC5A71 1px solid;
  border-radius: 5px;
  height: 20px;
  transition: transform .2s;

  &:hover {
    transform: scale(1.1);
  }

  ::placeholder {
    display: flex;
    height: 100%;
    width: 100%;
    padding: 5px;
  }
`
