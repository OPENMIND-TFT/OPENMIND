import styled from 'styled-components';

const QuestionListContainer = styled.div`
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
      font-size: 2rem;
      line-height: 25px;
    }
  }
`;

export default QuestionListContainer;
