import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: url(/assets/images/paperBackground.png) no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  flex-direction: column;

  .button-area {
    width: 100%;
    max-width: 1200px;
    margin: 45px auto 0;
    display: flex;
    justify-content: flex-end;
    padding-bottom: 69px;
  }

  .input-area {
    padding: 32px;
    background: var(--Grayscale-10);
    width: 400px;
    border-radius: 16px;
    margin-top: 24px;
    padding: 32px;

    form {
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 100%;
      position: relative;
    }

    .initial-input {
      outline: none;

      background-color: #ffffff;
      border: 1px solid;
      border-color: var(--Grayscale-40);
      border-radius: 8px;
      width: 100%;
      height: 46px;
      padding: 12px 16px 12px 40px;
      font-size: 1.6rem;

      &:focus {
        border: 1px solid var(--Brown-40);
      }
    }

    .error-input {
      background-color: #ffffff;
      border: 1px solid;
      border-color: red;
      border-radius: 8px;
      width: 100%;
      height: 46px;
      padding: 12px 16px 12px 40px;
      font-size: 1.6rem;
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
    img {
      height: auto;
      width: 100%;
      position: fixed;
      bottom: 0;
      left: 0;
      padding: 0px 100px 0px 100px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1124px) {
    .button-area {
      padding: 0 50px 69px 0;
    }
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    .button-area {
      order: 2;
      margin-top: 24px;
      text-align: center;
      padding-bottom: 24px;
      justify-content: center;
    }
    .logo {
      order: 1;
      width: 248px;
      height: 98px;
      margin-top: 80px;
    }
    .input-area {
      order: 3;
      width: 305px;
    }

    .image-area {
      img {
        height: auto;
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        padding: 0;
      }
    }
  }
`;

export default MainContainer;
