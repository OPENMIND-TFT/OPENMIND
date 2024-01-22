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
    color: var(--Grayscale-40);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 18px;

    display: flex;
    padding: 4px 12px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    border-radius: 8px;
    border: 1px solid var(--Grayscale-40);
    background: var(--Grayscale-10);
  }

  .write-date {
    color: var(--Grayscale-40);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-size: 1.4rem;
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
    font-size: 1.8rem;
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
    font-size: 1.8rem;
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
      font-size: 1.6rem;
      line-height: 22px;
    }
  }

  .answer-button {
    color: var(--Grayscale-10);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-size: 1.6rem;
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
      font-size: 1.4rem;
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

export default QuestionContainer;
