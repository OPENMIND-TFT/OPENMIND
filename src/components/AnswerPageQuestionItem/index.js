import { useState, useEffect } from 'react';
import getElapsedTime from '../../utils/getElapsedTime';
import QuestionContainer from './style';
import ReactionButtonBox from '../ReactionButtonBox';
import KebabDropDown from '../KebabDropDown';
import QuestionCardHeader from '../QuestionCardHeader';
import Cta from '../Cta';

const AnswerPageQuestionItem = ({ user, question, setQuestions }) => {
  const [content, setContent] = useState(question?.answer?.content || '');
  const [textAreaValue, setTextAreaValue] = useState(true);
  const [clickStatus, setClickStatus] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isFadedIn, setIsFadedIn] = useState(false);

  const { id } = question;

  useEffect(() => {
    const fadeInTimeout = setTimeout(() => {
      setIsFadedIn(true);
    }, 300);

    return () => {
      clearTimeout(fadeInTimeout);
    };
  }, []);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
    setContent(content);
    setTextAreaValue(false);
  };

  const checkTextAreaEmpty = e => {
    if (e.target.value !== '') {
      setTextAreaValue(false);
    } else {
      setTextAreaValue(true);
    }
  };

  const submitAnswer = async () => {
    const response = await fetch(
      `https://openmind-api.vercel.app/3-5/questions/${id}/answers/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content,
          isRejected: false,
        }),
      },
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error('답변을 전송하는데 실패했습니다.');
    }
    setQuestions(prevQuestions => {
      const index = prevQuestions.findIndex(
        prevQuestion => prevQuestion.id === question.id,
      );

      const temp = prevQuestions.filter(prevQuestion => prevQuestion);
      temp[index].answer = result;

      return temp;
    });
  };

  const submitEditAnswer = async () => {
    const response = await fetch(
      `https://openmind-api.vercel.app/3-5/answers/${question.answer.id}/`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content,
          isRejected: false,
        }),
      },
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error('답변을 수정하는데 실패했습니다.');
    }
    setContent(result.content);
    setIsEditing(false);
  };

  const questionStatus = () => {
    if (question?.answer?.isRejected) {
      return <div className="answer-status reject">답변거절</div>;
    }

    if (question.answer) {
      return <div className="answer-status complete">답변완료</div>;
    }

    return <div className="answer-status none">미답변</div>;
  };

  const handleEnterEditAnswer = e => {
    if (e.keyCode === 13 && !e.shiftKey) {
      submitEditAnswer();
    }
  };

  const renderEditableView = () => {
    if (isEditing) {
      return (
        <form>
          <textarea
            onChange={e => {
              setContent(e.target.value);
              checkTextAreaEmpty(e);
            }}
            value={content}
            className="answer-textarea"
            onKeyDown={handleEnterEditAnswer}
          />
          <Cta width="100%" onClick={submitEditAnswer} disabled={textAreaValue}>
            수정완료
          </Cta>
        </form>
      );
    }

    if (question.answer.isRejected) {
      return <p className="reply-font refuse">답변 거절</p>;
    }

    return <p className="reply-font">{content}</p>;
  };

  const handleEnterSubmitAnswer = e => {
    if (e.keyCode === 13 && !e.shiftKey) {
      submitAnswer();
    }
  };

  return (
    <QuestionContainer>
      <div className={`question-card ${isFadedIn ? 'fade-in' : ''}`}>
        <div className="card-navigation">
          {questionStatus()}
          <ul
            className="card-navigation-kebab"
            onClick={() => {
              setClickStatus(!clickStatus);
            }}
            role="presentation"
          >
            <img
              className="kebab-image"
              src="/assets/images/kebab.svg"
              alt="더보기 버튼"
            />
            {clickStatus && (
              <KebabDropDown
                question={question}
                handleEditClick={handleEditClick}
                isEditing={isEditing}
                setClickStatus={setClickStatus}
                setQuestions={setQuestions}
                setContent={setContent}
                setIsEditing={setIsEditing}
              />
            )}
          </ul>
        </div>
        <QuestionCardHeader question={question} />

        {question.answer ? (
          <>
            <div className="card-answer-section">
              <div className="card-profile-wrap">
                <img
                  src={user.imageSource}
                  alt="프로필 이미지"
                  className="card-profile-image"
                />
              </div>
              <div className="answer-input-area">
                <div className="answer-area-wrap">
                  <div className="answer-profile-wrap">
                    <h3 className="answer-profile-name">{user.name}</h3>
                    <h4 className="answer-date">
                      {getElapsedTime(question.answer.createdAt)}
                    </h4>
                  </div>
                  {renderEditableView()}
                </div>
              </div>
            </div>
            <div className="question-item-footer">
              <ReactionButtonBox
                question={question}
                style={{ border: 'none' }}
              />
              <button
                className="edit-button"
                type="button"
                onClick={handleEditClick}
              >
                {isEditing ? (
                  <>
                    <img src="/assets/images/xIcon.svg" alt="수정취소 버튼" />
                    <span>수정취소</span>
                  </>
                ) : (
                  <>
                    <img src="/assets/images/edit.svg" alt="수정 버튼" />
                    <span>수정하기</span>
                  </>
                )}
              </button>
            </div>
          </>
        ) : (
          <>
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
                  <form>
                    <textarea
                      onChange={e => {
                        setContent(e.target.value);
                        checkTextAreaEmpty(e);
                      }}
                      value={content}
                      placeholder="답변을 입력해주세요."
                      className="answer-textarea"
                      onKeyDown={handleEnterSubmitAnswer}
                    />
                    <Cta
                      width="100%"
                      onClick={submitAnswer}
                      disabled={textAreaValue}
                    >
                      답변완료
                    </Cta>
                  </form>
                </div>
              </div>
            </div>
            <ReactionButtonBox question={question} />
          </>
        )}
      </div>
    </QuestionContainer>
  );
};

export default AnswerPageQuestionItem;
