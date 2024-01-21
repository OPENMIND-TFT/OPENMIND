import styled from 'styled-components';

const PheedPageContainer = styled.div`
  .pheed-page-header {
    position: relative;
    height: 234px;
    background-color: var(--Grayscale-10);
  }
  .header-section {
    position: absolute;
    bottom: 0;
    background-image: url(/assets/images/logoWithoutBg.png);
    background-repeat: no-repeat;
    background-position: center top -10%;
    width: 100%;
    height: 184px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 12px;
  }

  .header-logo {
    width: 170px;
    height: 67px;
  }

  .header-profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .profile-name {
    font-size: 3.2rem;
  }

  .profile-share-icons {
    display: flex;
    gap: 12px;
  }

  .profile-share-link-box {
    width: 40px;
    height: 40px;
    border-radius: 9999px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .profile-share-link-box.brown {
    background-color: var(--Brown-40);
  }

  .profile-share-link-box.yellow {
    background-color: var(--Yellow-50);
  }

  .profile-share-link-box.blue {
    background-color: var(--Blue-50);
  }

  .profile-link-icon {
    width: 18px;
    height: 18px;
  }
`;

export default PheedPageContainer;
