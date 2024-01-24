import getElapsedTime from '../../utils/getElapsedTime';
import QuestionContainer from './style';

const QuestionItem = ({ user, question }) => {
  return (
    <QuestionContainer>
      <div className="question-card">
        <div className="card-navigation">
          {question.answer ? (
            <div className="answer-status complete">답변 완료</div>
          ) : (
            <div className="answer-status none">미답변</div>
          )}
          <div className="card-navigation-kebab">
            <img src="/assets/images/kebab.svg" alt="더보기 버튼" />
          </div>
        </div>
        <div className="card-title-wrap">
          <span className="write-date">질문 · </span>
          <span className="write-date">
            {getElapsedTime(question.createdAt)}
          </span>
          <h3 className="card-title">{question.content}</h3>
        </div>
        <div className="card-answer-section">
          <div className="card-profile-wrap">
            <img
              src={user.imageSource}
              alt="프로필 이미지"
              className="card-profile-image"
            />
          </div>
          <div className="answer-input-area">
            <div className="answer-input-wrap">
              <h3 className="answer-profile-name">{user.name}</h3>
              <textarea
                placeholder="답변을 입력해주세요."
                className="answer-textarea"
              />
              <button type="button" className="answer-button">
                답변완료
              </button>
            </div>
          </div>
        </div>
        <div className="reaction-section">
          <div className="reaction-like">
            <img src="/assets/images/thumbsUp.svg" alt="좋아요 버튼" />
            <h4>좋아요</h4>
          </div>
          <div className="reaction-hate">
            <img src="/assets/images/thumbsDown.svg" alt="싫어요 버튼" />
            <h4>싫어요</h4>
          </div>
        </div>
      </div>
    </QuestionContainer>
  );
};

export default QuestionItem;
