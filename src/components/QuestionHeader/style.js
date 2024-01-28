import styled from 'styled-components';

const QuestionHeaderContainer = styled.header`
  .header-background-image {
    position: relative;
    width: 100%;
    height: 234px;
    background: url(/assets/images/headerBackgroundImage.png) no-repeat center;
    z-index: 1;

    .header-profile-wrap {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 2;
      top: 50px;
      left: 0;
      right: 0;

      .header-profile-image {
        width: 136px;
        height: 136px;
        border-radius: 999px;
      }

      .profile-title {
        color: var(--Grayscale-60);
        font-feature-settings:
          'clig' off,
          'liga' off;
        font-family: Actor;
        font-size: 3.2rem;
        font-weight: 400;
        line-height: 40px;
        margin-top: 12px;
        margin-bottom: 12px;
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1124px) {
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    .header-background-image {
      .header-profile-wrap {
        .top-logo {
          width: 124px;
          height: 49px;
          margin-top: 40px;
        }
        .header-profile-image {
          width: 104px;
          height: 104px;
        }
      }
    }
  }
`;

export default QuestionHeaderContainer;
