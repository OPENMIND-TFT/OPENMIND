import MainContainer from './style';

const MainPage = () => {
  return (
    <MainContainer>
      <div className="buttonArea">
        <button type="button">질문 하러 가기 {'->'}</button>
      </div>

      <img className="logoImage" src="/assets/images/logo.png" alt="로고" />
      <div className="inputArea">
        <form>
          <input type="text" placeholder="이름을 입력하세요" />
          <img
            className="personIcon"
            src="/assets/images/personIcon.png"
            alt="사람 아이콘"
          />
          <button type="submit">질문 받기</button>
        </form>
      </div>
      <div className="imageArea">
        <img
          className="peopleImage"
          src="/assets/images/logoWithoutBg.png"
          alt="메인페이지 일러스트"
        />
      </div>
    </MainContainer>
  );
};

export default MainPage;
