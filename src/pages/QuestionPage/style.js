import styled from 'styled-components';

const QuestionPageContainer = styled.div`
  position: relative;

  button {
    cursor: pointer;
  }

  .questions-page-main {
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
    background: url('/assets/images/bucket.png') no-repeat center;
    background-size: cover;
    position: absolute;
    left: 50%;
    bottom: 65px;
    transform: translate(-50%);
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
      margin-bottom: 20px;
      position: relative;

      .question-delete-button {
        position: absolute;
        top: 28px;
        right: 32px;
        width: 100px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 200px;
        background: var(--Brown-40);
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        border: 0;

        color: var(--Grayscale-10, #fff);
        font-size: 1.5rem;
      }
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
    .answer.rejected {
      border-color: var(--Red-50);
      color: var(--Red-50);
    }

    .answer-box {
      display: flex;
      gap: 12px;
    }

    .answer-profile-image {
      width: 48px;
      height: 48px;
      border-radius: 9999px;
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
  .question-write-button-mobile {
    visibility: hidden;
  }

  @media screen and (min-width: 768px) and (max-width: 1124px) {
    .questions-page-main {
      padding: 0px 32px;
    }
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    .questions-page-header {
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
    .questions-page-main {
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
      visibility: visible;
    }
  }
`;

export default QuestionPageContainer;
