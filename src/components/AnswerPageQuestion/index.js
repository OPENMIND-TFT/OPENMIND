import QuestionItem from '../AnswerPageQuestionItem';
import QuestionItemContainer from './style';

const AnswerPageQuestion = ({ user, questions }) => {
  return (
    <QuestionItemContainer>
      {questions.length ||
        questions.map(question => (
          <QuestionItem key={question.id} user={user} question={question} />
        ))}
    </QuestionItemContainer>
  );
};

export default AnswerPageQuestion;
