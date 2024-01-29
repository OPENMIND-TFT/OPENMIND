import { useState, useCallback } from 'react';
import getUserQuestionData from '../../api/getUserQuestionData';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import AnswerPageQuestionItem from '../AnswerPageQuestionItem';
import QuestionItemContainer from './style';

const AnswerPageQuestion = ({ user, id }) => {
  const [questions, setQuestions] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  const getUserQuestions = useCallback(async () => {
    const responseQuestions = await getUserQuestionData(id, page);

    if (responseQuestions.results.length === 0) {
      setHasMore(false);
    } else {
      setQuestions(prevQuestions => [
        ...prevQuestions,
        ...responseQuestions.results,
      ]);
      setPage(prevPage => prevPage + 1);
    }
  }, [page, id]);

  const elementRef = useInfiniteScroll(getUserQuestions);
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
      {hasMore && <div ref={elementRef}>Load More Questoins...</div>}
    </QuestionItemContainer>
  );
};

export default AnswerPageQuestion;
