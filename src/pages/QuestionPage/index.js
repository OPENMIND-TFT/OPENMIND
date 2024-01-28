import { useEffect, useState, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import getElapsedTime from '../../utils/getElapsedTime';
import ReactionButtonBox from '../../components/ReactionButtonBox';
import ModalQuestion from '../../components/ModalQuestion';
import ShareButtonBar from '../../components/ShareButtonBar';
import QuestionPageContainer from './style';

const API_BASE_URL = 'https://openmind-api.vercel.app/3-5';

const getUser = async userId => {
  const response = await fetch(`${API_BASE_URL}/subjects/${userId}/`);
  if (!response.ok) {
    throw new Error('유저 데이터를 불러오는데 실패했습니다');
  }
  return response.json();
};

const QuestionItem = ({ user, question }) => {
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
    </section>
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
          <ShareButtonBar />
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
  const [isShowModal, setIsShowModal] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);

  const handleModalQuestion = () => {
    setIsShowModal(!isShowModal);
  };

  const getUserQuestions = useCallback(async () => {
    const response = await fetch(
      `${API_BASE_URL}/subjects/${id}/questions/?limit=4&offset=${page * 4}`,
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
  }, [page, id]);
  const elementRef = useInfiniteScroll(getUserQuestions);

  const fetchData = async () => {
    const responseUser = await getUser(id);
    setUser(responseUser);
    setQuestionCount(responseUser.questionCount);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <QuestionPageContainer>
      <QuestionHeader user={user} />

      <main className="questions-page-main">
        <article className="question-list-container">
          <div className="title-box">
            <figure className="title-image" />
            <span className="title">
              {questionCount
                ? `${questionCount}개의 질문이 있습니다.`
                : `아직 질문이 없습니다.`}
            </span>
            {!questionCount && <figure className="no-question-image" />}
          </div>
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
            {hasMore && <div ref={elementRef}>Load More Questoins...</div>}
          </div>
        </article>
      </main>

      <button
        className="question-write-button"
        type="button"
        onClick={handleModalQuestion}
      >
        질문 작성하기
      </button>
      <button
        className="question-write-button-mobile"
        type="button"
        onClick={handleModalQuestion}
      >
        질문 작성
      </button>
      {isShowModal && <ModalQuestion handleClose={handleModalQuestion} />}
    </QuestionPageContainer>
  );
};

export default QuestionPage;
