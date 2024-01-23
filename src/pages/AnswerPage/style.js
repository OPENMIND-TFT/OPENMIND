import styled from 'styled-components';

const AnswerPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: url(/assets/images/paperBackground.png) no-repeat;
  background-size: cover;
  background-color: var(--Grayscale-20);

  .list-area {
    display: flex;
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
        font-size: 1.5rem;
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
        flex-shrink: 0;

        padding: 12px 24px;
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1124px) {
    .list-area {
      padding: 0 32px;
    }
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    .list-area {
      padding: 0 32px;

      .article-container {
        .delete-button {
          width: 70px;
          height: 25px;
          font-size: 1rem;
          padding: 0px 17.5px;
        }
      }
    }
  }
`;

export default AnswerPageContainer;
