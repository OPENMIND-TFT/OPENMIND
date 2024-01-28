import { useState } from 'react';
import getElapsedTime from '../../utils/getElapsedTime';
import QuestionContainer from './style';
import ReactionButtonBox from '../ReactionButtonBox';
import KebabDropDown from '../KebabDropDown';

const AnswerPageQuestionItem = ({ user, question }) => {
  const [content, setContent] = useState('');
  const [textAreaValue, setTextAreaValue] = useState(true);
  const [clickStatus, setClickStatus] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const { id } = question;

  const handleEditClick = () => {
    setIsEditing(!isEditing);
    setContent(question.answer.content);
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

    if (!response.ok) {
      throw new Error('답변을 전송하는데 실패했습니다.');
    }
    window.location.reload(true);
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

    if (!response.ok) {
      throw new Error('답변을 수정하는데 실패했습니다.');
    }
    window.location.reload(true);
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
          />
          <button
            type="button"
            className="answer-button"
            onClick={submitEditAnswer}
            disabled={textAreaValue}
          >
            수정완료
          </button>
        </form>
      );
    }

    if (question.answer.isRejected) {
      return <p className="reply-font refuse">답변 거절</p>;
    }

    return <p className="reply-font">{question.answer.content}</p>;
  };

  const handleEnterSubmitAnswer = e => {
    if (e.keyCode === 13 && !e.shiftKey) {
      submitAnswer();
    }
  };

  return (
    <QuestionContainer>
      <div className="question-card">
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
              />
            )}
          </ul>
        </div>
        <div className="card-title-wrap">
          <span className="write-date">질문 · </span>
          <span className="write-date">
            {getElapsedTime(question.createdAt)}
          </span>
          <h3 className="card-title">{question.content}</h3>
        </div>

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
                    <button
                      type="button"
                      className="answer-button"
                      onClick={submitAnswer}
                      disabled={textAreaValue}
                    >
                      답변완료
                    </button>
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
