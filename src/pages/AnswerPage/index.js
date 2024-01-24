import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import QuestionList from '../../components/AnswerPageQuestionList';
import AnswerPageContainer from './style';
import QuestionHeader from '../../components/AnswerPageQuestionHeader';
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
      <QuestionHeader user={user} />
      <main className="list-area">
        <article className="article-container">
          <div className="delete-button-wrap">
            <button type="button" className="delete-button">
              삭제하기
            </button>
          </div>

          <QuestionList user={user} questions={questions} />
        </article>
      </main>
    </AnswerPageContainer>
  );
};

export default AnswerPage;
