import Skeleton from 'react-loading-skeleton';
import AnswerPageQuestion from '../AnswerPageQuestion';
import QuestionListContainer from './style';
import 'react-loading-skeleton/dist/skeleton.css';

const AnswerPageQuestionList = ({ user, id, isLoading }) => {
  return (
    <QuestionListContainer>
      {isLoading ? (
        <Skeleton className="skeleton-card-list-style" />
      ) : (
        <div className="question-list-wrap">
          <div className="list-title-wrap">
            <img src="/assets/images/messagesBrown40.svg" alt="메시지 아이콘" />
            <h3 className="list-title">
              {user.questionCount
                ? `${user.questionCount}개의 질문이 있습니다.`
                : `아직 질문이 없습니다.`}
            </h3>
            {!user.questionCount && <figure className="no-question-image" />}
          </div>
          <AnswerPageQuestion user={user} id={id} />
        </div>
      )}
    </QuestionListContainer>
  );
};

export default AnswerPageQuestionList;
