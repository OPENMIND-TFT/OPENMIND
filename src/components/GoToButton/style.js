import styled from 'styled-components';

const Button = styled.button`
  padding: 12px 24px;
  height: 46px;
  display: flex;
  gap: 8px;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--Brown-40);
  background-color: var(--Brown-10);
  color: var(--Brown-40);
  transition: 0.3s all;
  cursor: pointer;

  & span {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 22px;
  }

  & img {
    width: 18px;
    height: 18px;
    transition: 0.1s all;
  }

  &:hover {
    background-color: var(--Brown-40);
    color: var(--Grayscale-10);

    img {
      filter: brightness(100);
    }
  }

  @media screen and (max-width: 425px) {
    height: 34px;
    font-size: 1.4rem;
    padding: 8px 12px;
  }
`;

export default Button;
