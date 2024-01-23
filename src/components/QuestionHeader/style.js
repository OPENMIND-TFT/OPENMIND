import styled from 'styled-components';

const HeaderContainer = styled.header`
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
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;

      .top-logo {
        width: 170px;
        height: 67px;
        margin-top: 50px;
        margin-bottom: 12px;
      }

      .header-profile-image {
        width: 136px;
        height: 136px;
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

      .button-wrap {
        display: flex;
        gap: 12px;

        img {
          display: flex;
          margin: 0 auto;
        }

        .sns-button {
          width: 40px;
          height: 40px;
          border-radius: 200px;
          border: none;
        }

        .link-color {
          background-color: var(--Brown-40);
        }

        .kakaotalk-color {
          background-color: var(--Yellow-50);
        }

        .facebook-color {
          background-color: var(--Blue-50);
        }
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

export default HeaderContainer;
