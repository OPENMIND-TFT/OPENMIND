import { useNavigate } from 'react-router-dom';
import BackToMain from '../../components/BackToMain';
import Cta from '../../components/Cta';
import NotFoundContainer from './style';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const backToReturn = () => {
    navigate(-1);
  };

  return (
    <NotFoundContainer>
      <div className="fixed-logo">
        <BackToMain />
      </div>
      <div className="not-found-content">
        <img
          src="/assets/images/notFoundEmoji.png"
          alt="눈을 감은 사람 아이콘"
        />
        <div className="not-found-content-text">
          <h2>Ooops, Page Not Found</h2>
          <p>
            존재하지 않는 주소를 입력하셨거나,
            <br />
            요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.
          </p>
        </div>
        <Cta width="336px" height="46px" onClick={backToReturn}>
          이전페이지로
        </Cta>
      </div>
    </NotFoundContainer>
  );
};

export default NotFoundPage;
