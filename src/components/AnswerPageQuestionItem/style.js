import styled from 'styled-components';

const QuestionContainer = styled.div`
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
    opacity: 0;
    transition: opacity 0.8s ease-in-out;
  }
  .question-card.fade-in {
    opacity: 1;
  }

  .card-navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card-navigation-kebab {
    display: flex;
    position: relative;

    .kebab-image {
      cursor: pointer;
    }
  }

  .answer-status {
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
  }

  .complete {
    color: var(--Brown-40);
    border: 1px solid var(--Brown-40);
    background: var(--Grayscale-10);
  }

  .none {
    color: var(--Grayscale-40);
    border: 1px solid var(--Grayscale-40);
    background: var(--Grayscale-10);
  }

  .reject {
    color: var(--Red-50);
    border: 1px solid var(--Red-50);
    background: var(--Grayscale-10);
  }

  .card-answer-section {
    display: flex;
    gap: 12px;
  }

  .card-profile-wrap {
    display: flex;
  }

  .card-profile-image {
    width: 48px;
    height: 48px;
    border-radius: 999px;
  }

  .answer-area-wrap {
    width: 100%;
  }

  .answer-input-area {
    display: flex;
    flex-grow: 1;
  }

  .answer-profile-wrap {
    display: flex;
    flex-direction: row;
    gap: 8px;
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
    font-family: 'Actor', 'pretendard';
    font-size: 1.8rem;
    line-height: 24px;
  }

  .answer-date {
    color: var(--Grayscale-40);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 18px;
  }

  .reply-font {
    color: var(--Grayscale-60, #000);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-size: 1.6rem;
    line-height: 22px;
    white-space: pre-line;
  }

  .refuse {
    color: var(--Red-50);
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

  .question-item-footer {
    border-top: 1px solid var(--Grayscale-30);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .edit-button {
    margin-top: 24px;
    gap: 8px;
    color: var(--Grayscale-50);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 18px;
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
    cursor: pointer;

    img {
      width: 14px;
      height: 14px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1124px) {
    .edit-button {
      display: none;
    }
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    .edit-button {
      display: none;
    }
  }
`;

export default QuestionContainer;
