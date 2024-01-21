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

  .question-list-wrap {
    width: 100%;
    display: inline-flex;
    padding: 16px;
    margin-bottom: 140px;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    border-radius: 16px;
    border: 1px solid var(--Brown-30);
    background: var(--Brown-10);
  }

  .list-title-wrap {
    display: flex;
    gap: 8px;
  }

  .list-title {
    color: var(--Brown-40);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Actor;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
  }

  .card-navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card-navigation-kebab {
    display: flex;
  }

  .answer-status {
    color: var(--Brown-40);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;

    display: flex;
    padding: 4px 12px;
    justify-content: center;
    align-items: center;

    border-radius: 8px;
    border: 1px solid var(--Brown-40);
    background: var(--Grayscale-10);
  }

  .question-card {
    display: flex;
    padding: 32px;
    flex-direction: column;
    gap: 32px;
    align-self: stretch;

    border-radius: 16px;
    background: var(--Grayscale-10);

    box-shadow: 0px 4px 4px 0px rgba(140, 140, 140, 0.25);
  }

  .write-date {
    color: var(--Grayscale-40);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;

    margin-bottom: 4px;
  }

  .card-answer-section {
    display: flex;
    gap: 12px;
  }

  .card-title {
    color: var(--Grayscale-60);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Actor;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  .card-profile-wrap {
    display: flex;
  }

  .card-profile-image {
    width: 48px;
    height: 48px;
  }

  .answer-input-area {
    display: flex;
    flex-grow: 1;
  }

  .answer-input-wrap {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .answer-profile-name {
    color: var(--Grayscale-60);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Actor;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  .answer-textarea {
    width: 100%;
    height: 186px;
    padding: 16px;
    align-self: stretch;
    margin-top: 4px;
    margin-bottom: 8px;

    border: none;
    border-radius: 8px;
    background: var(--Grayscale-20);

    &:placeholder {
      color: var(--Grayscale-40);
      font-feature-settings:
        'clig' off,
        'liga' off;
      font-family: Pretendard;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
    }
  }

  .answer-button {
    color: var(--Grayscale-10);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;

    display: flex;
    width: 100%;
    height: 46px;
    padding: 12px 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;

    border: none;
    border-radius: 8px;
    background: var(--Brown-40);
  }

  .reaction-section {
    display: flex;
    gap: 32px;
    border-top: 1px solid var(--Grayscale-30);

    h4 {
      color: var(--Grayscale-40);
      font-feature-settings:
        'clig' off,
        'liga' off;
      font-family: Pretendard;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 18px;

      margin-left: 6px;
    }
  }

  .reaction-like {
    display: flex;
    margin-top: 24px;
  }

  .reaction-hate {
    display: flex;
    margin-top: 24px;
  }
`;

export default AnswerPageContainer;
