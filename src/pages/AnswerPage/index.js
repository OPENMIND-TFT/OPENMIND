import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import QuestionList from '../../components/AnswerPageQuestionList';
import AnswerPageContainer from './style';
import QuestionHeader from '../../components/AnswerPageQuestionHeader';
import getUserData from '../../api/getUserData';

const AnswerPage = () => {
  const [user, setUser] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getUserIdData = async () => {
      const data = await getUserData(id);
      setUser(data);
    };
    getUserIdData();
  }, []);

  return (
    <AnswerPageContainer>
      <QuestionHeader user={user} />
      <main className="list-area">
        <article className="article-container">
          <div className="delete-button-wrap">
            <button type="button" className="delete-button">
              삭제하기
            </button>
          </div>
          <QuestionList user={user} />
        </article>
      </main>
    </AnswerPageContainer>
  );
};

export default AnswerPage;
