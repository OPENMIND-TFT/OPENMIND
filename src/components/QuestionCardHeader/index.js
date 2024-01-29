import getElapsedTime from '../../utils/getElapsedTime';
import QuestionCardHeaderStyle from './style';

const QuestionCardHeader = ({ question }) => {
  return (
    <QuestionCardHeaderStyle>
      <div className="card-title-wrap">
        <span className="write-date">질문 · </span>
        <span className="write-date">{getElapsedTime(question.createdAt)}</span>
        <h3 className="card-title">{question.content}</h3>
      </div>
    </QuestionCardHeaderStyle>
  );
};

export default QuestionCardHeader;
