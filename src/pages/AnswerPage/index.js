import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import AnswerPageQuestionList from '../../components/AnswerPageQuestionList';
import AnswerPageContainer from './style';
import QuestionHeader from '../../components/QuestionHeader';
import getUserData from '../../api/getUserData';
import deleteAll from '../../api/deleteAll';
import 'react-loading-skeleton/dist/skeleton.css';

const AnswerPage = () => {
  const [user, setUser] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const responseUser = await getUserData(id);
    setUser(responseUser);
    setIsLoading(false);
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
      <QuestionHeader user={user} isLoading={isLoading} />
      <main className="list-area">
        <article className="article-container">
          <div className="delete-button-wrap">
            {isLoading ? (
              <Skeleton className="skeleton-delete-button-style" />
            ) : (
              <button
                type="button"
                className="delete-button"
                onClick={handleDeleteAll}
              >
                삭제하기
              </button>
            )}
          </div>

          <AnswerPageQuestionList user={user} id={id} isLoading={isLoading} />
        </article>
      </main>
    </AnswerPageContainer>
  );
};

export default AnswerPage;
