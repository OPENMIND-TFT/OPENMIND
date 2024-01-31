import { useNavigate } from 'react-router-dom';
import GoToButton from '../GoToButton';

const GoToAnswer = () => {
  const navigate = useNavigate();
  const myId = window.localStorage.getItem('myId');

  const checkLocalStorage = () => {
    window.localStorage.getItem(
      myId ? navigate(`/post/${myId}/answer`) : navigate('/'),
    );
  };

  return <GoToButton onClick={checkLocalStorage}>답변하러 가기</GoToButton>;
};

export default GoToAnswer;
