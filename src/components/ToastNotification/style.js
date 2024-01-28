import styled from 'styled-components';

const ToastStyled = styled.span`
  position: fixed;
  left: 50%;
  bottom: 60px;
  transform: translateX(-50%);
  display: inline-block;
  background: var(--Grayscale-60);
  color: var(--Grayscale-10);
  border-radius: 8px;
  padding: 12px 20px;
  box-shadow: 0px 4px 4px 0px rgba(140, 140, 140, 0.25);
  z-index: 1;
`;

export default ToastStyled;
