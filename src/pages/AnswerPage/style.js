import styled from 'styled-components';

const AnswerPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: url(/assets/images/paperBackground.png) no-repeat;
  background-size: cover;
  background-color: var(--Grayscale-20);

  .header-background-image {
    position: relative;
    width: 100%;
    height: 234px;
    background: url(/assets/images/headerBackgroundImage.png) no-repeat center;
    z-index: 1;
  }

  .header-profile-wrap {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 2;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }

  .top-logo {
    width: 170px;
    height: 67px;
    margin-top: 50px;
    margin-bottom: 12px;
  }

  .profile-title {
    color: var(--Grayscale-60);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Actor;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px; /* 125% */
    margin-top: 12px;
    margin-bottom: 12px;
  }

  .button-wrap {
    display: flex;
    gap: 12px;
  }

  .sns-button {
    width: 40px;
    height: 40px;
    border-radius: 200px;
    border: none;
  }

  .link-color {
    background-color: var(--Brown-40);
  }

  .kakaotalk-color {
    background-color: var(--Yellow-50);
  }

  .facebook-color {
    background-color: var(--Blue-50);
  }
`;

export default AnswerPageContainer;
