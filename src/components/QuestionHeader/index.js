import Skeleton from 'react-loading-skeleton';
import QuestionHeaderContainer from './style';
import BackToMain from '../BackToMain';
import ShareButtonBar from '../ShareButtonBar';
import 'react-loading-skeleton/dist/skeleton.css';

const QuestionHeader = ({ user, isLoading }) => {
  return (
    <QuestionHeaderContainer>
      <div className="header-profile-wrap">
        {isLoading ? (
          <Skeleton className="skeleton-logo-style" />
        ) : (
          <BackToMain width="170px" />
        )}

        {isLoading ? (
          <Skeleton className="skeleton-profile-style" />
        ) : (
          <div>
            <img
              src={user.imageSource}
              alt="프로필 이미지"
              className="header-profile-image"
            />
          </div>
        )}

        {isLoading ? (
          <Skeleton className="skeleton-title-style" />
        ) : (
          <h2 className="profile-title">{user.name}</h2>
        )}
        {isLoading ? (
          <Skeleton className="skeleton-button-style" />
        ) : (
          <ShareButtonBar />
        )}
      </div>
    </QuestionHeaderContainer>
  );
};

export default QuestionHeader;
