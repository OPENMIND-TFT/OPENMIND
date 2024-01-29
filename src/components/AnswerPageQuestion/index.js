import useGetUserQuestions from '../../hooks/useGetUserQuestions';
import AnswerPageQuestionItem from '../AnswerPageQuestionItem';
import QuestionItemContainer from './style';

const AnswerPageQuestion = ({ user, id }) => {
  const { questions, hasMore, elementRef } = useGetUserQuestions(id);

  return (
    <QuestionItemContainer>
      {questions &&
        questions.map(question => (
          <AnswerPageQuestionItem
            key={question.id}
            user={user}
            question={question}
          />
        ))}
      {hasMore && (
        <div className="loading-spinner" ref={elementRef}>
          <img src="/assets/images/spinner.gif" alt="로딩 스피너" />
        </div>
      )}
    </QuestionItemContainer>
  );
};

export default AnswerPageQuestion;
