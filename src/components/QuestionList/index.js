import Question from '../Question';
import ReplyPosted from '../ReplyPosted';
import QuestionListContainer from './style';

const QuestionList = () => {
  return (
    <QuestionListContainer>
      <div className="question-list-wrap">
        <div className="list-title-wrap">
          <img src="/assets/images/messagesBrown40.svg" alt="메시지 아이콘" />
          <h3 className="list-title">1개의 질문이 있습니다.</h3>
        </div>
        <Question />
        <ReplyPosted />
      </div>
    </QuestionListContainer>
  );
};

export default QuestionList;
