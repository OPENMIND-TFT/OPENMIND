import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnswerPageQuestionList from '../../components/AnswerPageQuestionList';
import AnswerPageContainer from './style';
import QuestionHeader from '../../components/QuestionHeader';
import getUserData from '../../api/getUserData';
import deleteAll from '../../api/deleteAll';
import DeleteModal from '../../components/DeleteModal';
import DeleteModalContext from '../../contexts/DeleteModalContext';
import QuestionIdContext from '../../contexts/QuestionIdContext';

const AnswerPage = () => {
  const [user, setUser] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [questionId, setQuestionId] = useState('');

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
    <QuestionIdContext.Provider value={setQuestionId}>
      <DeleteModalContext.Provider value={setIsDeleteModal}>
        <AnswerPageContainer>
          <QuestionHeader user={user} />
          <main className="list-area">
            <article className="article-container">
              <div className="delete-button-wrap">
                <button
                  type="button"
                  className="delete-button"
                  onClick={e => setIsDeleteModal(e.target.textContent)}
                >
                  삭제하기
                </button>
              </div>

              <AnswerPageQuestionList user={user} id={id} />
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
