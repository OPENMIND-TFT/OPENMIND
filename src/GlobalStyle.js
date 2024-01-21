import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  :root {
    font-size: 62.5%;

    --Grayscale-10: #ffffff;
    --Grayscale-20: #f9f9f9;
    --Grayscale-30: #cfcfcf;
    --Grayscale-40: #818181;
    --Grayscale-50: #515151;
    --Grayscale-60: #000000;

    --Brown-10: #f5f1ee;
    --Brown-20: #e4d5c9;
    --Brown-30: #c7bbb5;
    --Brown-40: #542f1a;
    --Brown-50: #341909;

    --Blue-50: #1877f2;
    --Yellow-50: #fee500;
    --Red-50: #b93333;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  body,
  input,
  textarea,
  button,
  i {
    font-family: 'pretendard', sans-serif;
  }

  ul,
  li {
    list-style: none;
  }

  body {
    background: var(--Grayscale-20);
  }
`;
export default GlobalStyle;
