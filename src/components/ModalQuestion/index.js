import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// cp
import Container from './style';

const ModalQuestion = ({ handleClose }) => {
  const [userData, setUserData] = useState([]);
  const [isTextareaEmpty, setIsTextareaEmpty] = useState(true);
  const [question, setQuestion] = useState('');
  const SUBJECT_ID = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://openmind-api.vercel.app/3-5/subjects/${SUBJECT_ID.id}/`,
        );
        const data = await response.json();
        setUserData(data);
      } catch (e) {
        throw new Error('프로필 정보를 가져오지 못했습니다.');
      }
    }
    fetchData();
  }, []);

  if (!userData) {
    return null;
  }

  const textareaEmpty = e => {
    if (e.target.value !== '') {
      setIsTextareaEmpty(false);
    } else {
      setIsTextareaEmpty(true);
    }
  };

  const sendQuestion = () => {
    try {
      fetch(
        `https://openmind-api.vercel.app/3-5/subjects/${SUBJECT_ID.id}/questions/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            subjectId: SUBJECT_ID,
            content: question,
            team: '3-5',
          }),
        },
      );
    } catch (e) {
      throw new Error('전송에 실패했습니다.');
    }
    handleClose();
    window.location.reload(true);
  };

  const handleEnter = e => {
    if (e.keyCode === 13 && !e.shiftKey) {
      sendQuestion();
    }
  };

  return (
    <Container onClick={handleClose}>
      <div
        className="modal-window"
        onClick={e => e.stopPropagation()}
        onKeyDown={() => {}}
        role="presentation"
      >
        <header className="modal-title">
          <img
            src="/assets/images/messages.svg"
            alt="메세지아이콘"
            className="modal-title-img"
          />
          <h1 className="modal-title-h1">질문을 작성하세요</h1>
        </header>
        <img
          src="/assets/images/close.svg"
          alt="모달닫는버튼"
          className="modal-X"
          onClick={handleClose}
          onKeyDown={() => {}}
          role="presentation"
        />
        <div className="modal-profile">
          <h2 className="modal-profile-h2">To.</h2>
          <img
            src={userData.imageSource}
            alt="프로필사진"
            className="modal-profile-img"
          />
          <h2 className="modal-profile-h2">{userData.name}</h2>
        </div>
        <textarea
          name="question"
          className="modal-textarea"
          placeholder="질문을 입력해주세요"
          onChange={e => {
            textareaEmpty(e);
            setQuestion(e.target.value);
          }}
          onKeyDown={handleEnter}
        />
        <button
          className="modal-button"
          type="button"
          onClick={sendQuestion}
          disabled={isTextareaEmpty}
        >
          질문 보내기
        </button>
      </div>
    </Container>
  );
};

export default ModalQuestion;
