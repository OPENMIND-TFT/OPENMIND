import styled from 'styled-components';

const QuestionHeaderContainer = styled.header`
  position: relative;
  width: 100%;
  height: 234px;
  padding-top: 50px;
  z-index: 1;
  background: url(/assets/images/headerBackgroundImage.png) no-repeat center;

  .header-profile-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .header-profile-image {
      width: 136px;
      height: 136px;
      border-radius: 50%;
    }

    .profile-title {
      margin: 12px auto;
      color: var(--Grayscale-60);
      font-feature-settings:
        'clig' off,
        'liga' off;
      font-size: 3.2rem;
      font-weight: 400;
      line-height: 40px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1124px) {
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    padding-top: 40px;

    .header-profile-wrap {
      .logo {
        width: 124px;
        height: 49px;
      }

      .header-profile-image {
        width: 104px;
        height: 104px;
      }
    }
  }
`;

export default QuestionHeaderContainer;
