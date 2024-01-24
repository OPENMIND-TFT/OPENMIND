import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnswerPageQuestionList from '../../components/AnswerPageQuestionList';
import AnswerPageContainer from './style';
import AnswerPageQuestionHeader from '../../components/AnswerPageQuestionHeader';
import getUserData from '../../api/getUserData';
import getUserQuestionData from '../../api/getUserQuestionData';

const AnswerPage = () => {
  const [user, setUser] = useState([]);
  const [questions, setQuestions] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUserData(id);
      const questionData = await getUserQuestionData(id);

      setUser(userData);
      setQuestions(questionData.results);
    };

    fetchData();
  }, []);

  return (
    <AnswerPageContainer>
      <AnswerPageQuestionHeader user={user} />
      <main className="list-area">
        <article className="article-container">
          <div className="delete-button-wrap">
            <button type="button" className="delete-button">
              삭제하기
            </button>
          </div>

          <AnswerPageQuestionList user={user} questions={questions} />
        </article>
      </main>
    </AnswerPageContainer>
  );
};

export default AnswerPage;
