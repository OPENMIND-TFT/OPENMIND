import { Link } from 'react-router-dom';
import HeaderContainer from './style';

const QuestionHeader = () => {
  return (
    <HeaderContainer>
      <div className="header-background-image">
        <div className="header-profile-wrap">
          <Link to="/">
            <img
              className="top-logo"
              src="/assets/images/logo.png"
              alt="로고"
            />
          </Link>
          <div>
            <img
              src="/assets/images/profile.svg"
              alt="프로필 이미지"
              className="header-profile-image"
            />
          </div>
          <h2 className="profile-title">아초는고양이</h2>
          <div className="button-wrap">
            <button type="button" className="sns-button link-color">
              <img src="/assets/images/link.svg" alt="링크 복사하기" />
            </button>

            <button type="button" className="sns-button kakaotalk-color">
              <img src="/assets/images/kakaotalk.svg" alt="카카오톡 공유" />
            </button>

            <button type="button" className="sns-button facebook-color">
              <img src="/assets/images/facebook.svg" alt="페이스북 공유" />
            </button>
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default QuestionHeader;
