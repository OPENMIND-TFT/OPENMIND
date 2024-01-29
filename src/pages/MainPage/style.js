import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: url(/assets/images/paperBackground.png) no-repeat;
  background-size: cover;

  .button-area {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    max-width: 1200px;
    margin: 45px auto 0;
    padding-bottom: 120px;
  }

  .input-area {
    width: 400px;
    margin-top: 24px;
    padding: 32px;
    border-radius: 16px;
    background: var(--Grayscale-10);

    form {
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 100%;
      position: relative;

      input {
        width: 100%;
        height: 46px;
        padding: 12px 16px 12px 40px;
        border: 1px solid var(--Grayscale-40);
        border-radius: 8px;
        outline: none;
        background-color: var(--Grayscale-10);
        font-size: 1.6rem;

        &:focus {
          border: 1px solid var(--Brown-40);
        }
      }

      .error-input {
        border: 1px solid red;
      }
    }

    .person-icon {
      position: absolute;
      top: 13px;
      left: 16px;
    }

    .error-message {
      color: red;
      font-size: 1.4rem;
    }
  }

  .image-area {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;

    svg {
      position: fixed;
      bottom: 0;
      left: 50%;
      transform: translate(-50%);
    }

    .image-box {
      position: relative;
      width: 100%;
      max-width: 1250px;
      margin: 0 auto;

      .bubble-image {
        position: absolute;
        opacity: 0;
        animation: fade-in-up 1s forwards;
      }

      .bubble-hello {
        left: 6.5%;
        bottom: 255px;
        animation-delay: 1s;
      }

      .bubble-Cool {
        bottom: 235px;
        right: 2.5%;
        animation-delay: 1.6s;
      }

      .people-image {
        position: absolute;
        bottom: 0;
        left: 50%;
        height: auto;
        padding: 0px 100px 0px 100px;
        transform: translate(-50%);
      }
    }
  }

  @keyframes fade-in-up {
    0% {
      opacity: 0;
      transform: translateY(-5px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media screen and (max-width: 1250px) {
    .image-area {
      .image-box {
        .bubble-hello {
          left: 0%;
        }

        .bubble-Cool {
          right: 0%;
        }
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1124px) {
    .button-area {
      padding: 0 50px 69px 0;
    }

    .image-area {
      .image-box {
        .bubble-hello {
          bottom: 220px;
          width: 110px;
        }

        .bubble-Cool {
          bottom: 230px;
          width: 100px;
        }

        .people-image {
          position: fixed;
          bottom: 0;
          width: 100%;
          height: auto;
          padding: 0;
        }
      }
    }
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    justify-content: center;
    padding-bottom: 120px;

    .logo {
      order: 1;
      width: 248px;
      height: 98px;
    }

    .button-area {
      order: 2;
      justify-content: center;
      margin-top: 24px;
      padding-bottom: 24px;
      text-align: center;
    }

    .input-area {
      order: 3;
      width: 305px;
    }

    .image-area {
      order: 4;
      .image-box {
        .bubble-hello {
          bottom: 130px;
          width: 80px;
        }

        .bubble-Cool {
          bottom: 130px;
          width: 80px;
        }

        .people-image {
          position: fixed;
          bottom: 0;
          width: 100%;
          height: auto;
          padding: 0;
        }
      }
    }
  }
`;

export default MainContainer;
