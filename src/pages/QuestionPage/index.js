import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getElapsedTime from '../../utils/getElapsedTime';
import ReactionButtonBox from '../../components/ReactionButtonBox';
import ModalQuestion from '../../components/ModalQuestion';
import QuestionPageContainer from './style';
import QuestionHeader from '../../components/QuestionHeader';
import getUserData from '../../api/getUserData';
import QuestionCardHeader from '../../components/QuestionCardHeader';
import useGetUserQuestions from '../../hooks/useGetUserQuestions';

const QuestionItem = ({ user, question }) => {
  const [isFadedIn, setIsFadedIn] = useState(false);

  useEffect(() => {
    const fadeInTimeout = setTimeout(() => {
      setIsFadedIn(true);
    }, 300);

    return () => {
      clearTimeout(fadeInTimeout);
    };
  }, []);

  return (
    <section className={`question-answer-box ${isFadedIn ? 'fade-in' : ''}`}>
      {question.answer && question.answer.isRejected && (
        <div className="answer rejected">답변 거절</div>
      )}
      {question.answer && !question.answer.isRejected && (
        <div className="answer complete">답변 완료</div>
      )}
      {!question.answer && <div className="answer none">미답변</div>}

      <QuestionCardHeader question={question} />

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

const QuestionPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const { questions, hasMore, elementRef, setQuestions } =
    useGetUserQuestions(id);
  const [isShowModal, setIsShowModal] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);

  const handleModalQuestion = () => {
    setIsShowModal(!isShowModal);
  };

  const fetchData = async () => {
    const responseUser = await getUserData(id);
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
            {hasMore && (
              <div className="loading-spinner" ref={elementRef}>
                <img src="/assets/images/spinner.gif" alt="로딩 스피너" />
              </div>
            )}
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
