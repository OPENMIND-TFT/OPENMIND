import { Link } from 'react-router-dom';
import HeaderContainer from './style';
import ShareButtonBar from '../ShareButtonBar';

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
          <ShareButtonBar />
        </div>
      </div>
    </HeaderContainer>
  );
};

export default QuestionHeader;
