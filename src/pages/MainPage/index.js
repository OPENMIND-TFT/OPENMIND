import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import postPheedData from '../../api/creatPheed';
import BackToMain from '../../components/BackToMain';
import Cta from '../../components/Cta';
import GoToButton from '../../components/GoToButton';
import MainLineSvg from '../../components/MainLineSvg';
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
      <header className="button-area">
        <Link to="/list">
          <GoToButton>질문하러 가기</GoToButton>
        </Link>
      </header>
      <BackToMain />
      <main className="input-area">
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
      </main>
      <div className="image-area">
        <MainLineSvg />
        <img
          className="people-image"
          src="/assets/images/mainWithoutBg.png"
          alt="메인페이지 일러스트"
        />
      </div>
    </MainContainer>
  );
};

export default MainPage;
