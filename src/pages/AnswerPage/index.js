import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnswerPageQuestionList from '../../components/AnswerPageQuestionList';
import AnswerPageContainer from './style';
import AnswerPageQuestionHeader from '../../components/AnswerPageQuestionHeader';
import getUserData from '../../api/getUserData';
import deleteAll from '../../api/deleteAll';

const AnswerPage = () => {
  const [user, setUser] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchData = async () => {
    const responseUser = await getUserData(id);
    setUser(responseUser);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const handleDeleteAll = async () => {
    await deleteAll(id);
    navigate('/');
  };

  return (
    <AnswerPageContainer>
      <AnswerPageQuestionHeader user={user} />
      <main className="list-area">
        <article className="article-container">
          <div className="delete-button-wrap">
            <button
              type="button"
              className="delete-button"
              onClick={handleDeleteAll}
            >
              삭제하기
            </button>
          </div>

          <AnswerPageQuestionList user={user} id={id} />
        </article>
      </main>
    </AnswerPageContainer>
  );
};

export default AnswerPage;
