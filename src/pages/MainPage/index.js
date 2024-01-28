import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainContainer from './style';

const MainPage = () => {
  const navigate = useNavigate();

  const [nameValue, setNameValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNameChange = e => {
    setErrorMessage('');
    setNameValue(e.target.value);
  };

  async function creatPheed(formData) {
    const name = formData;
    const response = await fetch(
      `https://openmind-api.vercel.app/3-5/subjects/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          team: '3-5',
        }),
      },
    );
    if (!response.ok) {
      throw new Error('피드를 불러오는데 실패했습니다');
    }
    const body = await response.json();
    window.localStorage.setItem('myId', body.id);
    navigate(`/post/${body.id}/answer`);

    return body;
  }

  const handleSubmit = async e => {
    e.preventDefault();
    if (!nameValue) {
      setErrorMessage('이름을 입력해주세요!');
      return;
    }
    if (nameValue.length > 10) {
      setErrorMessage('이름은 10자 이하여야 합니다!');
      return;
    }
    await creatPheed(nameValue);
  };

  return (
    <MainContainer>
      <div className="button-area">
        <Link to="/list">
          <button type="button">질문 하러 가기 {'->'}</button>
        </Link>
      </div>
      <Link to="/">
        <img className="logo-image" src="/assets/images/logo.png" alt="로고" />
      </Link>
      <div className="input-area">
        <form onSubmit={handleSubmit}>
          <input
            className={errorMessage ? 'error-input' : 'initial-input'}
            type="text"
            placeholder="이름을 입력하세요"
            value={nameValue}
            onChange={handleNameChange}
          />
          <img
            className="person-icon"
            src="/assets/images/personIcon.svg"
            alt="사람 아이콘"
          />
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <button type="submit">질문 받기</button>
        </form>
      </div>
      <div className="image-area">
        <img
          className="people-image"
          src="/assets/images/logoWithoutBg.png"
          alt="메인페이지 일러스트"
        />
      </div>
    </MainContainer>
  );
};

export default MainPage;
