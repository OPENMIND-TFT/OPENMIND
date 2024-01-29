import styled from 'styled-components';

const MainLineSvgStyled = styled.svg`
  width: 1250px;
  fill: none;
  stroke: #000000;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;

  path {
    animation: line-drawing 2s forwards;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
  }

  @keyframes line-drawing {
    0% {
      stroke-dashoffset: 1000;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }

  @media screen and (min-width: 375px) and (max-width: 1124px) {
    width: 119%;
  }
`;

export default MainLineSvgStyled;
