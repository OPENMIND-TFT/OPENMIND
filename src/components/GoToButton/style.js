import styled from 'styled-components';

const GoToButtonStyled = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 12px 24px;
  height: 46px;
  border: 1px solid var(--Brown-40);
  border-radius: 8px;
  background-color: var(--Brown-10);
  color: var(--Brown-40);
  transition: 0.3s all;
  cursor: pointer;

  span {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 22px;
  }

  img {
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
    padding: 8px 12px;
    font-size: 1.4rem;
  }
`;

export default GoToButtonStyled;
