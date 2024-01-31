import { Link } from 'react-router-dom';
import BackToMainContainer from './style';

const BackToMain = ({ width, height }) => {
  return (
    <BackToMainContainer>
      <Link to="/">
        <img
          src="/assets/images/logo.png"
          width={width}
          height={height}
          className="logo"
          alt="로고"
        />
      </Link>
    </BackToMainContainer>
  );
};

export default BackToMain;
