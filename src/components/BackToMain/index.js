import { Link } from 'react-router-dom';
import Container from './style';

const BackToMain = () => {
  return (
    <Container>
      <Link to="/">
        <img src="/assets/images/logo.png" className="logo" alt="logo" />
      </Link>
    </Container>
  );
};

export default BackToMain;
