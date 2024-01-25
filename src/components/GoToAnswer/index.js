import { useNavigate } from 'react-router-dom';
import Button from './style';

const GoToAnswer = () => {
  const navigate = useNavigate();
  const myId = window.localStorage.getItem('myId');

  const checkLocalStorage = () => {
    window.localStorage.getItem(
      myId ? navigate(`post/${myId}/answer`) : navigate('/'),
    );
  };

  return (
    <Button onClick={checkLocalStorage}>
      <p className="button-p">답변하러 가기</p>
      <img
        src="/assets/images/arrowRight.svg"
        alt="오른쪽화살표"
        className="button-img"
      />
    </Button>
  );
};

export default GoToAnswer;
