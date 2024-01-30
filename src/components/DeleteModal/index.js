import { useRef } from 'react';
import DeleteModalContainer from './style';

const DeleteModal = ({
  isDeleteModal,
  setIsDeleteModal,
  handleDeleteAll,
  questionId,
}) => {
  const modalBackground = useRef();

  const deleteQuestion = async () => {
    await fetch(
      `https://openmind-api.vercel.app/3-5/questions/${questionId}/`,
      {
        method: 'DELETE',
      },
    );

    window.location.reload();
  };

  const handleDeleteQuestion = async () => {
    await deleteQuestion(questionId);
  };

  const handleModalBackground = e => {
    if (e.target === modalBackground.current) {
      setIsDeleteModal(false);
    }
  };

  const handleDeleteModal = () => {
    if (isDeleteModal === '질문삭제') {
      handleDeleteQuestion();
    } else if (isDeleteModal === '삭제하기') {
      handleDeleteAll();
    }
    setIsDeleteModal(false);
  };

  return (
    <DeleteModalContainer>
      <div
        className="modal-container"
        ref={modalBackground}
        onClick={handleModalBackground}
        onKeyDown={() => {}}
        role="presentation"
      >
        <div className="modal-content-box">
          <p className="delete-content">
            {isDeleteModal === '질문삭제' ? '질문 삭제' : '질문 전체 삭제'}
          </p>
          <p className="delete-content-emphasis">질문을 완전히 삭제할까요?</p>
          <div className="button-box">
            <button
              type="button"
              className="cancle-button"
              onClick={() => setIsDeleteModal(false)}
            >
              취소
            </button>
            <button
              type="button"
              className="delete-button"
              onClick={handleDeleteModal}
            >
              삭제
            </button>
          </div>
        </div>
      </div>
    </DeleteModalContainer>
  );
};

export default DeleteModal;
