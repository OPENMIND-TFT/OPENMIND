import styled from 'styled-components';

const PheedPageContainer = styled.div`
  position: relative;

  .pheed-page-header {
    position: relative;
    height: 234px;
    background-color: var(--Grayscale-10);
  }

  .header-section {
    position: absolute;
    bottom: 0;
    background-image: url(/assets/images/logoWithoutBg.png);
    background-repeat: no-repeat;
    background-position: center top -10%;
    width: 100%;
    height: 184px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 12px;

    .logo {
      width: 170px;
      height: 67px;
    }

    .profile {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }

    .profile-name {
      font-size: 3.2rem;
    }

    .profile-share-icons {
      display: flex;
      gap: 12px;
    }

    .profile-share-link-box {
      width: 40px;
      height: 40px;
      border-radius: 9999px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .profile-share-link-logo {
      width: 18px;
      height: 18px;
    }

    .profile-share-link-box.brown {
      background-color: var(--Brown-40);
    }

    .profile-share-link-box.yellow {
      background-color: var(--Yellow-50);
    }

    .profile-share-link-box.blue {
      background-color: var(--Blue-50);
    }
  }

  .pheed-page-main {
    display: flex;
    justify-content: center;
  }

  .question-list-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 189px;
    margin-bottom: 136px;
    width: 716px;
    min-height: 330px;
    background-color: var(--Brown-10);
    border: 1px solid var(--Brown-30);
    border-radius: 16px;
    padding: 16px;

    .title-box {
      display: flex;
      gap: 8px;
    }

    .title {
      font-family: Actor;
      color: var(--Brown-40);
      font-size: 2rem;
      margin-bottom: 16px;
    }

    .title-image {
      background-image: url('/assets/images/messagesBrown40.svg');
      width: 24px;
      height: 24px;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

  .no-question-image {
    width: 150px;
    height: 154px;
    display: flex;
    background: url('/assets/images/bucket.png');
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    bottom: 65px;
  }

  .question-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .question-answer-box {
      display: flex;
      flex-direction: column;
      gap: 32px;
      border-radius: 16px;
      background: var(--Grayscale-10);
      box-shadow: 0px 4px 4px 0px rgba(140, 140, 140, 0.25);
      width: 100%;
      min-height: 243px;
      padding: 32px;
    }

    .answer {
      width: 76px;
      height: 26px;
      padding: 4px 11px;
      font-size: 1.4rem;
      font-weight: 500;
      color: var(--Brown-40, #542f1a);
      border-radius: 8px;
      border: 1px solid var(--Brown-40);
      background: var(--Grayscale-10);
    }

    .answer.none {
      width: 61px;
      border-color: var(--Grayscale-40);
      color: var(--Grayscale-40);
    }

    .question-box {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .question-title-box {
      font-size: 1.4rem;
      color: var(--Grayscale-40);
      margin-bottom: 4px;
    }

    .question-content {
      font-size: 1.8rem;
      font-family: Actor;
    }

    .answer-box {
      display: flex;
      gap: 12px;
    }

    .answer-profile-image {
      width: 48px;
      height: 48px;
    }

    .answer-title-box {
      display: flex;
      align-items: center;
      margin-bottom: 4px;
    }

    .answer-profile-name {
      font-size: 1.8rem;
      font-family: Actor;
      margin-right: 8px;
      line-height: 24px;
    }

    .answer-time-line {
      font-size: 1.4rem;
      color: var(--Grayscale-40);
    }

    .answer-content {
      font-size: 1.6rem;
      line-height: 22px;
    }

    .answer-content.refuse {
      color: var(--Red-50);
    }

    .reaction-button-box {
      display: flex;
      align-items: flex-end;
      border-top: 1px solid var(--Grayscale-30);
      gap: 32px;
      height: 43px;
    }

    .like-button-box,
    .dislike-button-box {
      display: flex;
      align-items: center;
      gap: 6px;
      cursor: pointer;
      font-size: 1.4rem;
      color: var(--Grayscale-40);
    }

    .like-button-box.on {
      color: var(--Blue-50);
      .tumbs-up-image {
        filter: invert(36%) sepia(32%) saturate(6200%) hue-rotate(203deg)
          brightness(100%) contrast(91%);
      }
    }

    .dislike-button-box.on {
      color: var(--Red-50);
      .tumbs-up-image {
        filter: invert(20%) sepia(24%) saturate(6385%) hue-rotate(344deg)
          brightness(111%) contrast(79%);
      }
    }

    .tumbs-up-image {
      background: url('/assets/images/thumbs-up.svg');
    }

    .tumbs-down-image {
      background: url('/assets/images/thumbs-down.svg');
    }

    .tumbs-up-image,
    .tumbs-down-image {
      width: 16px;
      height: 16px;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

  .question-write-button {
    position: fixed;
    z-index: 1;
    bottom: 24px;
    right: 24px;
    width: 208px;
    height: 54px;
    padding: 12px 24px;
    border-radius: 200px;
    font-size: 2rem;
    color: var(--Grayscale-10);
    background: var(--Brown-40);
    border: 0;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  @media screen and (min-width: 768px) and (max-width: 1124px) {
    .pheed-page-main {
      padding: 0px 32px;
    }
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    .pheed-page-header {
      height: 177px;
    }
    .header-section {
      padding-top: 40px;
      .logo {
        width: 124px;
        height: 49px;
      }

      .header-profile-image {
        width: 104px;
        height: 104px;
      }
    }
    .pheed-page-main {
      padding: 0px 32px;
    }
    .question-write-button {
      display: none;
    }
    .question-write-button-mobile {
      position: fixed;
      z-index: 1;
      bottom: 24px;
      right: 24px;
      width: 123px;
      height: 54px;
      padding: 12px 24px;
      border-radius: 200px;
      font-size: 2rem;
      color: var(--Grayscale-10);
      background: var(--Brown-40);
      border: 0;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }
  }
`;

export default PheedPageContainer;
