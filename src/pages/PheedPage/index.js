import { Link } from 'react-router-dom';
import PheedPageContainer from './style';

const PheedPage = () => {
  return (
    <PheedPageContainer>
      <header className="pheed-page-header">
        <section className="header-section">
          <Link to="/">
            <img
              src="/assets/images/logo.png"
              className="logo"
              alt="OpenMind 서비스 로고"
            />
          </Link>
          <section className="profile">
            <img
              src="/assets/images/tempProfile.svg"
              className="header-profile-image"
              alt="프로필 이미지"
            />
            <span className="profile-name">아초는 고양이</span>
            <div className="profile-share-icons">
              <div className="profile-share-link-box brown">
                <img
                  src="/assets/images/Link.svg"
                  className="profile-share-link-logo"
                  alt="링크 공유하기 기능이 있는 로고"
                />
              </div>
              <div className="profile-share-link-box yellow">
                <img
                  src="/assets/images/Kakaotalk.svg"
                  className="profile-share-link-logo Kakaotalk-logo"
                  alt="카카오톡으로 공유하기 기능이 있는 카카오톡 로고"
                />
              </div>
              <div className="profile-share-link-box blue">
                <img
                  src="/assets/images/Facebook.svg"
                  className="profile-share-link-logo Facebook-logo"
                  alt="페이스북으로 공유하기 기능이 있는 페이스북 로고"
                />
              </div>
            </div>
          </section>
        </section>
      </header>

      <main className="pheed-page-main">
        <article className="question-list-container">
          <div className="title-box">
            <figure className="title-image" />
            <span className="title">3개의 질문이 있습니다</span>
          </div>
          {/* 질문이 없는 경우 no-question-image 활성화
          <figure className="no-question-image" /> */}
          <div className="question-list">
            <section className="question-answer-box answer-complete">
              <div className="answer complete">답변 완료</div>
              <div className="question-box">
                <div className="question-title-box">
                  <span className="question-title">질문 · </span>
                  <span className="question-time-line">2주전</span>
                </div>
                <span className="question-content">좋아하는 동물은?</span>
              </div>
              <div className="answer-box">
                <img
                  src="/assets/images/tempProfile.svg"
                  className="answer-profile-image"
                  alt="프로필 이미지"
                />
                <div className="answer-content-box">
                  <div className="answer-title-box">
                    <span className="answer-profile-name">아초는고양이</span>
                    <span className="answer-time-line">2주전</span>
                  </div>
                  <span className="answer-content">
                    그들을 불러 귀는 이상의 오직 피고, 가슴이 이상, 못할
                    봄바람이다. 찾아다녀도, 전인 방황하였으며, 대한 바이며,
                    이것이야말로 가치를 청춘의 따뜻한 그리하였는가? 몸이 열락의
                    청춘의 때문이다. 천고에 피어나는 간에 밝은 이상, 인생의
                    만물은 피다. 대중을 이성은 방황하여도, 그리하였는가? 크고
                    평화스러운 품에 방황하였으며, 말이다. 이상은 들어 예수는
                    크고 긴지라 역사를 피다. 얼음에 있음으로써 꽃 보배를 곧 가는
                    교향악이다. 우는 새 예가 우리의 것은 피다. 피가 그것을 어디
                    앞이 기쁘며, 이상의 열락의 위하여서 끝까지 것이다. 있는
                    봄바람을 방황하여도, 우리의 것은 작고 아니한 영원히 듣기만
                    운다.
                  </span>
                </div>
              </div>

              <div className="reaction-button-box">
                <div className="like-button-box on">
                  <figure className="tumbs-up-image" />
                  <span className="like">좋아요</span>
                  <span className="like-count">12</span>
                </div>
                <div className="dislike-button-box">
                  <figure className="tumbs-down-image" />
                  <span className="dislike">싫어요</span>
                </div>
              </div>
            </section>

            <section className="question-answer-box answer-none">
              <div className="answer none">미답변</div>
              <div className="question-box">
                <div className="question-title-box">
                  <span className="question-title">질문 · </span>
                  <span className="question-time-line">2주전</span>
                </div>
                <span className="question-content">좋아하는 동물은?</span>
              </div>

              <div className="reaction-button-box">
                <div className="like-button-box">
                  <figure className="tumbs-up-image" />
                  <span className="like">좋아요</span>
                </div>
                <div className="dislike-button-box">
                  <figure className="tumbs-down-image" />
                  <span className="dislike">싫어요</span>
                </div>
              </div>
            </section>

            <section className="question-answer-box answer-complete">
              <div className="answer complete">답변 완료</div>
              <div className="question-box">
                <div className="question-title-box">
                  <span className="question-title">질문 · </span>
                  <span className="question-time-line">2주전</span>
                </div>
                <span className="question-content">좋아하는 동물은?</span>
              </div>
              <div className="answer-box">
                <img
                  src="/assets/images/tempProfile.svg"
                  className="answer-profile-image"
                  alt="프로필 이미지"
                />
                <div className="answer-content-box">
                  <div className="answer-title-box">
                    <span className="answer-profile-name">아초는고양이</span>
                    <span className="answer-time-line">2주전</span>
                  </div>
                  <span className="answer-content refuse">답변 거절</span>
                </div>
              </div>

              <div className="reaction-button-box">
                <div className="like-button-box">
                  <figure className="tumbs-up-image" />
                  <span className="like">좋아요</span>
                </div>
                <div className="dislike-button-box">
                  <figure className="tumbs-down-image" />
                  <span className="dislike">싫어요</span>
                </div>
              </div>
            </section>
          </div>
        </article>
      </main>

      <button className="question-write-button" type="button">
        질문 작성하기
      </button>
      <button className="question-write-button-mobile" type="button">
        질문 작성
      </button>
    </PheedPageContainer>
  );
};

export default PheedPage;
