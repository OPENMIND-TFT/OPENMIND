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
              <img src="/assets/images/profile.svg" alt="프로필 이미지" />
            </div>
            <h2 className="profile-title">아초는고양이</h2>
            <div className="button-wrap">
              <button type="button" className="sns-button link-color">
                <img src="/assets/images/Link.svg" alt="링크 복사하기" />
              </button>

              <button type="button" className="sns-button kakaotalk-color">
                <img src="/assets/images/Kakaotalk.svg" alt="카카오톡 공유" />
              </button>

              <button type="button" className="sns-button facebook-color">
                <img src="/assets/images/Facebook.svg" alt="페이스북 공유" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </AnswerPageContainer>
  );
};

export default AnswerPage;
