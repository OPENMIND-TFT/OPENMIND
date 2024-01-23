import { useState } from 'react';
import { Link } from 'react-router-dom';
import MainContainer from './style';

const MainPage = () => {
  const [name, setName] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log({ name });
  };
  return (
    <MainContainer>
      <div className="button-area">
        <button type="button">질문 하러 가기 {'->'}</button>
      </div>
      <Link to="/">
        <img className="logo-image" src="/assets/images/logo.png" alt="로고" />
      </Link>
      <div className="input-area">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="이름을 입력하세요"
            value={name}
            onChange={handleNameChange}
          />
          <img
            className="person-icon"
            src="/assets/images/personIcon.svg"
            alt="사람 아이콘"
          />
          <button type="submit">질문 받기</button>
        </form>
      </div>
      <div className="image-area">
        {/* <img
          className="people-image"
          src="/assets/images/logoWithoutBg.png"
          alt="메인페이지 일러스트"
        /> */}
      </div>
    </MainContainer>
  );
};

export default MainPage;
