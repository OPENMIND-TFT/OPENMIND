import styled from 'styled-components';

const AnswerPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: url(/assets/images/paperBackground.png) no-repeat;
  background-size: cover;
  background-color: var(--Grayscale-20);

  .article-container {
    width: 716px;
    margin: 0 auto;

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
  }
`;

export default AnswerPageContainer;
