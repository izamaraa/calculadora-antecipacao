import styled from "styled-components";

export const DivPrincipal = styled.div`
  background-color: #f5f7fa;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;

  border-radius: 30px;
`;
export const TituloPrincipal = styled.h1`
  color: #656565;
  font-weight: bold;
  font-size: 40px;
`;

export const DivSimulacao = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  font-family: Fira Sans, sans-serif;
  gap: 1.5rem;
  padding: 4rem 5rem 4rem 4rem;
`;

export const Formulario = styled.form`
  div {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  .infos {
    display: flex;
    flex-direction: column-reverse;
    margin: 5px;
  }
  label {
    color: #656565;
  }
  input {
    height: 3rem;
    border-radius: 3px solid #f0f4f5;
  }
  span {
    color: red;
  }
  button {
    margin: 20px;
    border: 1px solid #4c7fbf;
    border-radius: 4px;
    display: inline-block;
    cursor: pointer;
    font-family: Verdana;
    font-weight: bold;
    font-size: 13px;
    padding: 6px 10px;
    text-decoration: none;
    border-color: #4c7fbf;
    background: linear-gradient(to bottom, #656565 5%, #4c7fbf 100%);
    box-shadow: inset 0px 1px 0px 0px #e3f1e3;
    color: #fff;
    text-shadow: 0px 1px 0px #4c7fbf;
  }

  button:hover {
    background: linear-gradient(to bottom, #68b465 5%, #abd5aa 100%);
  }
`;

export const Result = styled.div`
  width: 30%;
  gap: 1rem;
  padding: 6rem;
  h3 {
    color: #4c7fbf;
    font-size: 20px;
    font-style: italic;
    font-weight: 600;
  }
  p {
    color: #4c7fbf;
    font-size: 20px;
    font-style: italic;
    font-weight: 600;
    margin: 50px;
  }
`;
