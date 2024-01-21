import { Link } from 'react-router-dom';
import PheedPageContainer from './style';

const PheedPage = () => {
  return (
    <PheedPageContainer>
      <header className="pheed-page-header">
        <div className="header-background">
          <Link to="/">
            <img src="/assets/images/logo.png" className="logo" alt="로고" />
          </Link>
        </div>
      </header>
    </PheedPageContainer>
  );
};

export default PheedPage;
