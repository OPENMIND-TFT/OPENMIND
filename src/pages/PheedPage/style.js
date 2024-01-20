import styled from 'styled-components';

const PheedPageContainer = styled.div`
  .pheed-page-header {
    position: relative;
    height: 234px;
  }
  .header-background {
    position: absolute;
    bottom: 0;
    background-image: url(/assets/images/logoWithoutBg.png);
    background-repeat: no-repeat;
    background-position: center top -10%;
    width: 100%;
    height: 184px;
    display: flex;
    justify-content: center;
  }

  .logo {
    width: 170px;
    height: 67px;
  }
`;

export default PheedPageContainer;
