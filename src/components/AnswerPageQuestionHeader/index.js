import { Link } from 'react-router-dom';
import AnswerPageHeaderContainer from './style';
import ShareButtonBar from '../ShareButtonBar';

const AnswerPageQuestionHeader = ({ user }) => {
  return (
    <AnswerPageHeaderContainer>
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
              src={user.imageSource}
              alt="프로필 이미지"
              className="header-profile-image"
            />
          </div>
          <h2 className="profile-title">{user.name}</h2>
          <ShareButtonBar />
        </div>
      </div>
    </AnswerPageHeaderContainer>
  );
};

export default AnswerPageQuestionHeader;
