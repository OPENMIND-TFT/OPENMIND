import QuestionContainer from './style';

const Question = () => {
  return (
    <QuestionContainer>
      <div className="question-card">
        <div className="card-navigation">
          <div className="answer-status">미답변</div>
          <div className="card-navigation-kebab">
            <img src="/assets/images/kebab.svg" alt="더보기 버튼" />
          </div>
        </div>
        <div className="card-title-wrap">
          <h4 className="write-date">질문 2주전</h4>
          <h3 className="card-title">좋아하는 동물은?</h3>
        </div>
        <div className="card-answer-section">
          <div className="card-profile-wrap">
            <img
              src="/assets/images/profile.svg"
              alt="프로필 이미지"
              className="card-profile-image"
            />
          </div>
          <div className="answer-input-area">
            <div className="answer-input-wrap">
              <h3 className="answer-profile-name">아초는고양이</h3>
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

export default Question;
