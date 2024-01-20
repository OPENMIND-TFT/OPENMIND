import { Link } from 'react-router-dom';
import MainContainer from './style';

const MainPage = () => {
  return (
    <MainContainer>
      <div className="button-area">
        <button type="button">질문 하러 가기 {'->'}</button>
      </div>
      <Link to="/">
        <img className="logo-image" src="/assets/images/logo.png" alt="로고" />
      </Link>
      <div className="input-area">
        <form>
          <input type="text" placeholder="이름을 입력하세요" />
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
