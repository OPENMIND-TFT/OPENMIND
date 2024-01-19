import styled from 'styled-components';

const NotFoundContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: url(/assets/images/paperBackground.png) no-repeat;
  background-size: cover;

  a {
    position: fixed;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);

    img {
      width: 170px;
    }
  }

  .not-found-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    background: url(/assets/images/logoWithoutBg.png) no-repeat center bottom;

    .not-found-content-text {
      text-align: center;

      h2 {
        font-size: 2.5rem;
        font-weight: 400;
        margin-bottom: 20px;
      }

      p {
        line-height: 1.5em;
      }
    }

    button {
      display: inline-block;
      width: 336px;
      height: 46px;
      border-radius: 8px;
      font-size: 1em;
      background: var(--Brown-50);
      color: var(--Grayscale-10);
      padding: 12px 24px;
      border: 1px solid transparent;
      outline: 0;
      transition: 0.3s all;
      cursor: pointer;

      &:hover {
        background: var(--Grayscale-10);
        color: var(--Brown-50);
        border-color: var(--Brown-50);
      }
    }
  }
`;

export default NotFoundContainer;
