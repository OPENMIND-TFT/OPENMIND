import { useState, useEffect } from 'react';
import Container from './style';

const ModalQuestion = ({ handleClose }) => {
  const [userData, setUserData] = useState([]);
  const [isTextareaEmpty, setIsTextareaEmpty] = useState(true);
  const [question, setQuestion] = useState('');
  const SUBJECT_ID = window.location.pathname.slice(6, 10);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://openmind-api.vercel.app/3-5/subjects/${SUBJECT_ID}/`,
      );
      const data = await response.json();
      setUserData(data);
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
    fetch(
      `https://openmind-api.vercel.app/3-5/subjects/${SUBJECT_ID}/questions/`,
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

// 모달 호출하는곳에서 사용 할 코드
//
// 먼저 useState랑 모달 컴포넌트 import후,
//
// const [isShowModal, setIsShowModal] = useState(false);
//
// const handleModalQuestion = () => {
//   setIsShowModal(!isShowModal);
// };
//
// onClick={handleModalQuestion}(질문 작성하기 버튼에)
//
// {isShowModal && <ModalQuestion handleClose={handleModalQuestion} />}(호출하는곳 return 최하단)
