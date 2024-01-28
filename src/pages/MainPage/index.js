import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import postPheedData from '../../api/creatPheed';
import BackToMain from '../../components/BackToMain';
import Cta from '../../components/Cta';
import MainContainer from './style';

const MainPage = () => {
  const navigate = useNavigate();

  const [nameValue, setNameValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNameChange = e => {
    setErrorMessage('');
    setNameValue(e.target.value);
  };

  const creatPheed = async () => {
    const pheedData = await postPheedData(nameValue);
    window.localStorage.setItem('myId', pheedData.id);
    navigate(`/post/${pheedData.id}/answer`);
  };

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
      <BackToMain width="456px" />
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
          <Cta height="46px" type="submit">
            질문 받기
          </Cta>
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
