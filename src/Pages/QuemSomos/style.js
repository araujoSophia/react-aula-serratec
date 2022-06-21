import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #5499c7;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  color: black;
`;

export const FirstText = styled.h1`
  font-size: 43px;
  color: black;
  margin: 3rem;
`;

export const AulaButton = styled.button`
  cursor: pointer;
  background: black;
  font-size: 1rem;
  color: #fff;
  border: 2px solid #5499c7;
  border-radius: 0.4rem;
  margin-top: 6rem;
  &:hover {
    background-color: #333;
    color: #5499c7;
  }
`;
