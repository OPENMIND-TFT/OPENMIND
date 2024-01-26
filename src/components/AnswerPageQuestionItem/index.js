import { useState } from 'react';
import getElapsedTime from '../../utils/getElapsedTime';
import QuestionContainer from './style';
import ReactionButtonBox from '../ReactionButtonBox';
import EditButton from '../EditButton';

const AnswerPageQuestionItem = ({ user, question }) => {
  const [content, setContent] = useState('');
  const [textAreaValue, setTextAreaValue] = useState(true);
  const { id } = question;

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

  return (
    <QuestionContainer>
      <div className="question-card">
        <div className="card-navigation">
          {question.answer ? (
            <div className="answer-status complete">답변완료</div>
          ) : (
            <div className="answer-status none">미답변</div>
          )}
          <div className="card-navigation-kebab">
            <img src="/assets/images/kebab.svg" alt="더보기 버튼" />
          </div>
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
                  <p className="reply-font">{question.answer.content}</p>
                </div>
              </div>
            </div>
            <div className="question-item-footer">
              <ReactionButtonBox
                question={question}
                style={{ border: 'none' }}
              />
              <EditButton />
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
