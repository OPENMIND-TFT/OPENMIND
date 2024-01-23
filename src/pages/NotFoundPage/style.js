import styled from 'styled-components';

const NotFoundContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: url(/assets/images/paperBackground.png) no-repeat;
  background-size: cover;

  .fixed-logo {
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
        font-size: 4rem;
        margin-bottom: 20px;
      }

      p {
        font-size: 1.6rem;
        line-height: 1.5em;
      }
    }
  }

  /* 반응형 */
  @media screen and (max-width: 1024px) {
    .not-found-content {
      background-size: contain;
    }
  }

  @media screen and (max-width: 425px) {
    .not-found-content {
      .not-found-content-text {
        h2 {
          font-size: 2.4rem;
        }
      }
    }
  }
`;

export default NotFoundContainer;
