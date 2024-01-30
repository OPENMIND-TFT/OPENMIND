import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import AnswerPageQuestionList from '../../components/AnswerPageQuestionList';
import AnswerPageContainer from './style';
import QuestionHeader from '../../components/QuestionHeader';
import getUserData from '../../api/getUserData';
import deleteAll from '../../api/deleteAll';
import 'react-loading-skeleton/dist/skeleton.css';
import DeleteModal from '../../components/DeleteModal';
import DeleteModalContext from '../../contexts/DeleteModalContext';
import QuestionIdContext from '../../contexts/QuestionIdContext';

const AnswerPage = () => {
  const [user, setUser] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [questionId, setQuestionId] = useState('');

  const fetchData = async () => {
    setIsLoading(true);
    const delay = ms =>
      new Promise(res => {
        setTimeout(() => {
          res();
        }, ms);
      });
    await delay(1000);
    const responseUser = await getUserData(id);
    setUser(responseUser);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const handleDeleteAll = async () => {
    window.localStorage.removeItem('myId');
    await deleteAll(id);
    navigate('/');
  };

  return (
    <QuestionIdContext.Provider value={setQuestionId}>
      <DeleteModalContext.Provider value={setIsDeleteModal}>
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
                    onClick={e => setIsDeleteModal(e.target.textContent)}
                  >
                    삭제하기
                  </button>
                )}
              </div>

              <AnswerPageQuestionList
                user={user}
                id={id}
                isLoading={isLoading}
              />
            </article>
          </main>
          {isDeleteModal && (
            <DeleteModal
              questionId={questionId}
              isDeleteModal={isDeleteModal}
              setIsDeleteModal={setIsDeleteModal}
              handleDeleteAll={handleDeleteAll}
            />
          )}
        </AnswerPageContainer>
      </DeleteModalContext.Provider>
    </QuestionIdContext.Provider>
  );
};

export default AnswerPage;
