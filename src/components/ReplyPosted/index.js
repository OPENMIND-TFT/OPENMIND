import QuestionContainer from './style';

const ReplyPosted = () => {
  return (
    <QuestionContainer>
      <div className="question-card">
        <div className="card-navigation">
          <div className="answer-status">답변 완료</div>
          <div className="card-navigation-kebab">
            <img src="/assets/images/kebab.svg" alt="더보기 버튼" />
          </div>
        </div>
        <div className="card-title-wrap">
          <h4 className="write-date">질문 · 2주전</h4>
          <h3 className="card-title">노래 가사 적어줘</h3>
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
            <div className="answer-area-wrap">
              <div className="answer-profile-wrap">
                <h3 className="answer-profile-name">아초는고양이</h3>
                <h4 className="answer-date">2주전</h4>
              </div>
              <p className="reply-font">
                내 머리는 너무나 나빠서 너 하나밖에 난 모르고 다른 사람을 보고
                있는 넌 이런 내 마음도 모르겠지, 음 너의 하루에 나란 없겠지 또
                추억조차 없겠지만 너만 바라만 보고 있는 난 자꾸 눈물이 흐르고
                있어, 음 너의 뒷모습을 보는 것도 난 행복이야 아직 나의 마음을
                몰라도 끝내 스치듯이 가도, 오 네가 너무 보고 싶은 날엔 너무
                견디기 힘든 날에는 너를 사랑한다, 입가에 맴돌아 혼자 다시 또,
                crying for you 혼자 다시 또, missing for you Baby, I love you,
                Im waiting for you
              </p>
            </div>
          </div>
        </div>
        <footer className="card-footer-section">
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
          <button className="edit-button" type="button">
            <img src="/assets/images/edit.svg" alt="수정 버튼" />
            수정하기
          </button>
        </footer>
      </div>
    </QuestionContainer>
  );
};

export default ReplyPosted;
