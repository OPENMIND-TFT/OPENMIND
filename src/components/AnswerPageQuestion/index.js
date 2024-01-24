import QuestionItem from '../AnswerPageQuestionItem';
import QuestionItemContainer from './style';

const Question = ({ user }) => {
  return (
    <QuestionItemContainer>
      <QuestionItem user={user} />
    </QuestionItemContainer>
  );
};

export default Question;
