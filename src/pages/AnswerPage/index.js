import QuestionList from '../../components/QuestionList';
import AnswerPageContainer from './style';
import QuestionHeader from '../../components/QuestionHeader';

const AnswerPage = () => {
  return (
    <AnswerPageContainer>
      <QuestionHeader />
      <main className="list-area">
        <article className="article-container">
          <div className="delete-button-wrap">
            <button type="button" className="delete-button">
              삭제하기
            </button>
          </div>
          <QuestionList />
        </article>
      </main>
    </AnswerPageContainer>
  );
};

export default AnswerPage;
