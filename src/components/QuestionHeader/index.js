import QuestionHeaderContainer from './style';
import BackToMain from '../BackToMain';
import ShareButtonBar from '../ShareButtonBar';

const QuestionHeader = ({ user }) => {
  return (
    <QuestionHeaderContainer>
      <div className="header-background-image">
        <div className="header-profile-wrap">
          <BackToMain width="170px" />
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
    </QuestionHeaderContainer>
  );
};

export default QuestionHeader;
