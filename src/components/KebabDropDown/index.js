import { useContext, useEffect, useRef, useState } from 'react';
import DropDownContainer from './style';
import DeleteModalContext from '../../contexts/DeleteModalContext';
import QuestionIdContext from '../../contexts/QuestionIdContext';

const KebabDropDown = ({
  question,
  handleEditClick,
  isEditing,
  setClickStatus,
  setQuestions,
}) => {
  const dropdownRef = useRef(null);
  const { id } = question;
  const setIsDeleteModal = useContext(DeleteModalContext);
  const setQuestionId = useContext(QuestionIdContext);

  useEffect(() => {
    setQuestionId(question.id);

    const handleClickOutside = e => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setClickStatus(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const [editButtonImage, setEditButtonImage] = useState(
    '/assets/images/edit.svg',
  );
  const [deleteButtonImage, setDeleteButtonImage] = useState(
    '/assets/images/xIcon.svg',
  );

  const [rejectButtonImage, setRejectButtonImage] = useState(
    '/assets/images/rejection.svg',
  );

  const handleMouseEnterEdit = () => {
    setEditButtonImage('/assets/images/editblue50.svg');
  };

  const handleMouseLeaveEdit = () => {
    setEditButtonImage('/assets/images/edit.svg');
  };

  const handleMouseEnterDelete = () => {
    setDeleteButtonImage('/assets/images/xIconblue50.svg');
  };

  const handleMouseLeaveDelete = () => {
    setDeleteButtonImage('/assets/images/xIcon.svg');
  };

  const handleMouseEnterReject = () => {
    setRejectButtonImage('/assets/images/rejectionblue50.svg');
  };

  const handleMouseLeaveReject = () => {
    setRejectButtonImage('/assets/images/rejection.svg');
  };

  const deleteAnswer = async () => {
    await fetch(
      `https://openmind-api.vercel.app/3-5/answers/${question.answer.id}/`,
      {
        method: 'DELETE',
      },
    );
  };

  const handleDeleteAnswer = async () => {
    await deleteAnswer(question.answer.id);
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

  const kebabStatus = () => {
    if (question?.answer?.isRejected) {
      return (
        <div className="dropdown-box">
          <li>
            <button
              type="button"
              onClick={handleDeleteAnswer}
              onMouseEnter={handleMouseEnterReject}
              onMouseLeave={handleMouseLeaveReject}
            >
              <img src={rejectButtonImage} alt="답변거절 취소하기 버튼" />
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
            <button
              type="button"
              onClick={handleEditClick}
              onMouseEnter={handleMouseEnterEdit}
              onMouseLeave={handleMouseLeaveEdit}
            >
              {isEditing ? (
                <>
                  <img src={rejectButtonImage} alt="수정취소 버튼" />
                  <span
                    onMouseEnter={handleMouseEnterReject}
                    onMouseLeave={handleMouseLeaveReject}
                  >
                    수정취소
                  </span>
                </>
              ) : (
                <>
                  <img src={editButtonImage} alt="수정하기 버튼" />
                  <span>수정하기</span>
                </>
              )}
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={handleDeleteAnswer}
              onMouseEnter={handleMouseEnterDelete}
              onMouseLeave={handleMouseLeaveDelete}
            >
              <img src={deleteButtonImage} alt="답변 삭제하기 버튼" />
              <span>답변삭제</span>
            </button>
          </li>
        </div>
      );
    }

    return (
      <div className="dropdown-box">
        <li>
          <button
            type="button"
            onClick={submitAnswerRejected}
            onMouseEnter={handleMouseEnterReject}
            onMouseLeave={handleMouseLeaveReject}
          >
            <img src={rejectButtonImage} alt="답변 거절하기 버튼" />
            <span>답변거절</span>
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={e => setIsDeleteModal(e.target.textContent)}
            onMouseEnter={handleMouseEnterDelete}
            onMouseLeave={handleMouseLeaveDelete}
          >
            <img src={deleteButtonImage} alt="질문 삭제하기 버튼" />
            <span>질문삭제</span>
          </button>
        </li>
      </div>
    );
  };

  return (
    <DropDownContainer ref={dropdownRef}>{kebabStatus()}</DropDownContainer>
  );
};

export default KebabDropDown;
