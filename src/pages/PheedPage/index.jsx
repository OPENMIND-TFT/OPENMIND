import { Link } from 'react-router-dom';
import PheedPageContainer from './style';

const PheedPage = () => {
  return (
    <PheedPageContainer>
      <Link to="/">
        <img src="/assets/images/logo.png" className="logo" alt="로고" />
      </Link>
    </PheedPageContainer>
  );
};

export default PheedPage;
