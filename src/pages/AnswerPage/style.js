import styled from 'styled-components';

const AnswerPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: url(/assets/images/paperBackground.png) no-repeat;
  background-size: cover;
  background-color: var(--Grayscale-20);

  // 헤더 섹션 //

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

  .header-profile-image {
    width: 136px;
    height: 136px;
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

    img {
      display: flex;
      margin: 0 auto;
    }
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

  // 메인 섹션 //

  .article-container {
    width: 716px;
    margin: 0 auto;
  }

  .delete-button-wrap {
    display: flex;
    flex-direction: row-reverse;
  }

  .delete-button {
    color: var(--Grayscale-10);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    margin-top: 145px;
    margin-bottom: 8px;

    border-radius: 200px;
    border: none;
    background: var(--Brown-40);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    display: flex;
    align-items: center;

    width: 100px;
    height: 35px;
    padding: 12px 24px;
    flex-shrink: 0;
  }
`;

export default AnswerPageContainer;
