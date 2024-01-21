import styled from 'styled-components';

const QuestionContainer = styled.div`
  width: 100%;

  .question-card {
    width: 100%;
    display: flex;
    padding: 32px;
    flex-direction: column;
    gap: 32px;
    align-self: stretch;
    flex-grow: 1;
    border-radius: 16px;
    background: var(--Grayscale-10);

    box-shadow: 0px 4px 4px 0px rgba(140, 140, 140, 0.25);
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
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.8rem;

    display: flex;
    padding: 4px 12px;
    justify-content: center;
    align-items: center;

    border-radius: 8px;
    border: 1px solid var(--Brown-40);
    background: var(--Grayscale-10);
  }

  .write-date {
    color: var(--Grayscale-40);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Pretendard;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.8rem;

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
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.4rem;
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

  .answer-area-wrap {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .answer-profile-wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }

  .answer-profile-name {
    color: var(--Grayscale-60);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Actor;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.4rem;
  }

  .answer-date {
    color: var(--Grayscale-40);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Pretendard;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.8rem;
  }

  .reply-font {
    color: var(--Grayscale-60, #000);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Pretendard;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.2rem;
  }

  .card-footer-section {
    display: flex;
    border-top: 1px solid var(--Grayscale-30);
    justify-content: space-between;
    align-items: center;

    h4 {
      color: var(--Grayscale-40);
      font-feature-settings:
        'clig' off,
        'liga' off;
      font-family: Pretendard;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 500;
      line-height: 1.8rem;
      margin-left: 6px;
    }
  }

  .reaction-section {
    display: flex;
    gap: 32px;
  }

  .reaction-like {
    display: flex;
    margin-top: 24px;
  }

  .reaction-hate {
    display: flex;
    margin-top: 24px;
  }

  .edit-button {
    margin-top: 24px;
    gap: 8px;
    color: var(--Grayscale-50);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Pretendard;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.8rem;
    display: flex;
    width: 103px;
    padding: 10px 15px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 1px solid var(--Grayscale-30);
    background: var(--Grayscale-10);
    box-shadow: 0px 4px 4px 0px rgba(140, 140, 140, 0.25);

    img {
      width: 14px;
      height: 14px;
    }
  }
`;

export default QuestionContainer;
