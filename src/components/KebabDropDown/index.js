import DropDownContainer from './style';

const KebabDropDown = ({ question, handleEditClick, isEditing }) => {
  const { id } = question;

  const deleteAnswer = async () => {
    await fetch(
      `https://openmind-api.vercel.app/3-5/answers/${question.answer.id}/`,
      {
        method: 'DELETE',
      },
    );
  };

  const deleteQuestion = async () => {
    await fetch(
      `https://openmind-api.vercel.app/3-5/questions/${question.id}/`,
      {
        method: 'DELETE',
      },
    );
  };

  const handleDeleteAnswer = async () => {
    await deleteAnswer(question.answer.id);
    window.location.reload(true);
  };

  const handleDeleteQuestion = async () => {
    await deleteQuestion(question.id);
    window.location.reload(true);
  };

  const submitAnswerRejected = async () => {
    const response = await fetch(
      `https://openmind-api.vercel.app/3-5/questions/${id}/answers/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: '답변 거절',
          isRejected: true,
        }),
      },
    );

    if (!response.ok) {
      throw new Error('답변을 전송하는데 실패했습니다.');
    }
    window.location.reload(true);
  };

  const kebabStatus = () => {
    if (question?.answer?.isRejected) {
      return (
        <div className="dropdown-box">
          <li>
            <button type="button" onClick={handleDeleteAnswer}>
              <img src="/assets/images/xIcon.svg" alt="삭제하기 버튼" />
              <span>거절취소</span>
            </button>
          </li>
        </div>
      );
    }

    if (question.answer) {
      return (
        <div className="dropdown-box">
          <li>
            <button type="button" onClick={handleEditClick}>
              {isEditing ? (
                <>
                  <img src="/assets/images/xIcon.svg" alt="삭제하기 버튼" />
                  <span>수정취소</span>
                </>
              ) : (
                <>
                  <img src="/assets/images/Edit.svg" alt="수정하기 버튼" />
                  <span>수정하기</span>
                </>
              )}
            </button>
          </li>
          <li>
            <button type="button" onClick={handleDeleteAnswer}>
              <img src="/assets/images/xIcon.svg" alt="삭제하기 버튼" />
              <span>답변삭제</span>
            </button>
          </li>
        </div>
      );
    }

    return (
      <div className="dropdown-box">
        <li>
          <button type="button" onClick={submitAnswerRejected}>
            <img src="/assets/images/xIcon.svg" alt="삭제하기 버튼" />
            <span>답변거절</span>
          </button>
        </li>
        <li>
          <button type="button" onClick={handleDeleteQuestion}>
            <img src="/assets/images/xIcon.svg" alt="삭제하기 버튼" />
            <span>질문삭제</span>
          </button>
        </li>
      </div>
    );
  };

  return <DropDownContainer>{kebabStatus()}</DropDownContainer>;
};

export default KebabDropDown;
