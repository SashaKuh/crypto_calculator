import styled from 'styled-components';

export const ResultContainer = styled.div`
    font-size: 18px;
    display: grid;
    width: 270px;
    margin-top: 30px;
`;

export const DisabledInput = styled.input`
    width: 130px;
    padding: 8px;
    border: 1px solid black;
    border-radius: 4px;
    cursor: not-allowed;
    background: transparent;
    color: inherit;
    font-size: large;

`;
export const ResultLable = styled.label`
    display: flex;
    justify-content: center;
    border: 1px solid;
    border-radius: 6px;
    padding: 5px;
    font-size: xx-large;
`
export const MiniContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
`