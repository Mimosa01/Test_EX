import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  img {
    width: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    min-width: 375px;
    font-family: sans-serif;
  }
`

export const Container = styled.div`
  margin: 0 auto;
  padding: 20px;
  max-width: 1280px;
  width: 100%;
`;

export const Oops = styled.span`
  align-self: center;
  width: 100%;
  text-align: center;
  font-size: 18px;
`;