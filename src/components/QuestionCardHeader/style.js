import styled from 'styled-components';

const QuestionCardHeaderStyle = styled.div`
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

  .card-title {
    color: var(--Grayscale-60);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Actor;
    font-size: 1.8rem;
    line-height: 24px;
    white-space: pre-line;
  }
`;

export default QuestionCardHeaderStyle;
