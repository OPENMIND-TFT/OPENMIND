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
    text-align: end;
    padding-bottom: 69px;

    button {
      width: 161px;
      height: 46px;
      padding: 12px 24px;
      border-radius: 8px;
      border: 1px solid;
      border-color: var(--Brown-40);
      color: var(--Brown-40);
      background-color: var(--Brown-10);
      font-size: 1.6rem;
      font-weight: 400;
      margin-top: 45px;
      margin-right: 130px;

      cursor: pointer;
    }
  }

  .input-area {
    padding: 32px;
    background: var(--Grayscale-10);
    width: 400px;
    border-radius: 16px;
    margin-top: 24px;

    form {
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 336px;
      position: relative;
    }

    input {
      background-color: #ffffff;
      border: 1px solid;
      border-color: var(--Grayscale-40);
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
    button {
      height: 46px;
      padding: 12px 24px;
      border-radius: 8px;
      border: 1px solid;
      color: var(--Grayscale-10);
      background-color: var(--Brown-40);
      font-size: 1.6rem;
      font-weight: 400;

      cursor: pointer;
    }
  }

  .image-area {
    background-image: url(/assets/images/logoWithoutBg.png);
    height: auto;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 0px 100px 0px 100px;
     
    }
  }
`;

export default MainContainer;
