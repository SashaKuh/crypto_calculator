import styled from 'styled-components';

export const InputContainer = styled.div`
  display: grid;
`;

export const StyledInput = styled.input`
  width: 252px;
  padding: 8px;
  border: 1px solid black;
  border-radius: 4px;
  margin-top: 10px;
  background: transparent;
  color: inherit;
  font-size: large;
`;

export const RadioButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  gap: 10px;
`;

export const RadioButtonLabel = styled.label`
font-size: x-large;
  display: flex;
  justify-content: center;
  border: 1px solid;
  border-radius: 6px;
  padding: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  input[type='radio'] {
    display: none;
  }

  &:hover {
    background-color: lightgray;
  }

  &.active {
    color: black;
    background-color: #FCD535;
  }
  
`;

export const RadioLabel = styled.label`
  display: flex;
  justify-content: center;
  border: 1px solid;
  border-radius: 6px;
  padding: 5px;
`;