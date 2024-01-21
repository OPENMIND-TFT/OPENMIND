import { Link } from 'react-router-dom';
import PheedPageContainer from './style';

const PheedPage = () => {
  return (
    <PheedPageContainer>
      <header className="pheed-page-header">
        <section className="header-section">
          <Link to="/">
            <img
              src="/assets/images/logo.png"
              className="header-logo"
              alt="OpenMind 서비스 로고"
            />
          </Link>
          <section className="header-profile">
            <img
              src="/assets/images/tempProfile.svg"
              className="header-profile-image"
              alt="프로필 이미지"
            />
            <span className="profile-name">아초는 고양이</span>
            <div className="profile-share-icons">
              <div className="profile-share-link-box brown">
                <img
                  src="/assets/images/Link.svg"
                  className="profile-link-icon"
                  alt="링크 공유하기 기능이 있는 로고"
                />
              </div>
              <div className="profile-share-link-box yellow">
                <img
                  src="/assets/images/Kakaotalk.svg"
                  className="profile-link-logo Kakaotalk-logo"
                  alt="카카오톡으로 공유하기 기능이 있는 카카오톡 로고"
                />
              </div>
              <div className="profile-share-link-box blue">
                <img
                  src="/assets/images/Facebook.svg"
                  className="profile-link-logo Facebook-logo"
                  alt="페이스북으로 공유하기 기능이 있는 페이스북 로고"
                />
              </div>
            </div>
          </section>
        </section>
      </header>
    </PheedPageContainer>
  );
};

export default PheedPage;
