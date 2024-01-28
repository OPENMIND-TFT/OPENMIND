import { Link } from 'react-router-dom';
import LogoContainer from './style';

const BackToMain = ({ width, height }) => {
  return (
    <LogoContainer>
      <Link to="/">
        <img
          src="/assets/images/logo.png"
          width={width}
          height={height}
          className="logo"
          alt="로고"
        />
      </Link>
    </LogoContainer>
  );
};

export default BackToMain;
