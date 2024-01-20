import AnswerPageContainer from './style';

const AnswerPage = () => {
  return (
    <AnswerPageContainer>
      <header>
        <div className="header-background-image">
          <div className="header-profile-wrap">
            <div>
              <img
                className="top-logo"
                src="/assets/images/logo.png"
                alt="로고"
              />
            </div>
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
      </header>
      <main>
        <article>
          <button type="button" className="delete-button">
            삭제하기
          </button>
          <div className="question-list-wrap">
            <div className="list-title-wrap">
              <img src="/assets/images/Messages.svg" alt="메시지 아이콘" />
              <h3 className="list-title">1개의 질문이 있습니다.</h3>
            </div>
            <div className="question-card">
              <div className="card-navigation">
                <div className="answer-status">답변 완료</div>
                <img src="/assets/images/kebab.svg" alt="더보기 버튼" />
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
                    <input
                      placeholder="답변을 입력해주세요."
                      className="answer-input"
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
          </div>
        </article>
      </main>
    </AnswerPageContainer>
  );
};

export default AnswerPage;
