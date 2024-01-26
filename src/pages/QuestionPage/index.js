import { useEffect, useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import getElapsedTime from '../../utils/getElapsedTime';
import ReactionButtonBox from '../../components/ReactionButtonBox';
import QuestionPageContainer from './style';

const API_BASE_URL = 'https://openmind-api.vercel.app/3-5';

const getUser = async userId => {
  const response = await fetch(`${API_BASE_URL}/subjects/${userId}/`);
  if (!response.ok) {
    throw new Error('유저 데이터를 불러오는데 실패했습니다');
  }
  return response.json();
};

const QuestionItem = ({ user, question, setQuestions, setQuestionCount }) => {
  const deleteQuestion = async questionId => {
    const response = await fetch(`${API_BASE_URL}/questions/${questionId}/`, {
      method: 'DELETE',
    });

    if (response.ok) {
      setQuestions(prevQuestions =>
        prevQuestions.filter(prevQuestion => prevQuestion.id !== question.id),
      );
      setQuestionCount(prevCount => prevCount - 1);
    } else if (!response.ok) {
      throw new Error('질문 삭제 실패했습니다');
    }
  };

  return (
    <section className="question-answer-box answer-complete">
      {question.answer ? (
        <div className="answer complete">답변 완료</div>
      ) : (
        <div className="answer none">미답변</div>
      )}
      <div className="question-box">
        <div className="question-title-box">
          <span className="question-title">질문 · </span>
          <span className="question-time-line">
            {getElapsedTime(question.createdAt)}
          </span>
        </div>
        <span className="question-content">{question.content}</span>
      </div>

      {question.answer ? (
        <div className="answer-box">
          <img
            src={user.imageSource}
            className="answer-profile-image"
            alt="프로필 이미지"
          />
          <div className="answer-content-box">
            <div className="answer-title-box">
              <span className="answer-profile-name">{user.name}</span>
              <span className="answer-time-line">
                {getElapsedTime(question.answer.createdAt)}
              </span>
            </div>
            {question.answer.isRejected ? (
              <span className="answer-content refuse">답변 거절</span>
            ) : (
              <span className="answer-content">{question.answer.content}</span>
            )}
          </div>
        </div>
      ) : null}

      <ReactionButtonBox question={question} />

      <button
        type="button"
        className="question-delete-button"
        onClick={() => deleteQuestion(question.id)}
      >
        삭제하기
      </button>
    </section>
  );
};

const ProfileShareIcons = () => {
  return (
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
  );
};

const QuestionHeader = ({ user }) => {
  return (
    <header className="questions-page-header">
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
            src={user.imageSource}
            className="header-profile-image"
            alt="프로필 이미지"
          />
          <span className="profile-name">{user.name}</span>
          <ProfileShareIcons />
        </section>
      </section>
    </header>
  );
};

const QuestionPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);

  const elementRef = useRef(null);

  const getUserQuestions = async userId => {
    const response = await fetch(
      `${API_BASE_URL}/subjects/${userId}/questions/?limit=4&offset=${page * 4}`,
    );
    const responseQuestions = await response.json();
    if (responseQuestions.results.length === 0) {
      setHasMore(false);
    } else {
      setQuestions(prevQuestions => [
        ...prevQuestions,
        ...responseQuestions.results,
      ]);
      setPage(prevPage => prevPage + 1);
    }
  };

  const onInterSection = entries => {
    const firstEntry = entries[0];
    if (firstEntry.isIntersecting && hasMore) {
      getUserQuestions(id);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onInterSection);
    if (observer && elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [questions]);
  const fetchData = async () => {
    const responseUser = await getUser(id);
    setUser(responseUser);
    setQuestionCount(responseUser.questionCount);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <QuestionPageContainer>
      <QuestionHeader user={user} />

      <main className="questions-page-main">
        <article className="question-list-container">
          <div className="title-box">
            <figure className="title-image" />
            <span className="title">{questionCount}개의 질문이 있습니다</span>
          </div>
          {/* 질문이 없는 경우 no-question-image 활성화
          <figure className="no-question-image" /> */}

          <div className="question-list">
            {questions.map(question => (
              <QuestionItem
                key={question.id}
                user={user}
                question={question}
                setQuestions={setQuestions}
                setQuestionCount={setQuestionCount}
              />
            ))}
            {hasMore && <div ref={elementRef}>Load More Questions...</div>}
          </div>
        </article>
      </main>

      <button className="question-write-button" type="button">
        질문 작성하기
      </button>
      <button className="question-write-button-mobile" type="button">
        질문 작성
      </button>
    </QuestionPageContainer>
  );
};

export default QuestionPage;
