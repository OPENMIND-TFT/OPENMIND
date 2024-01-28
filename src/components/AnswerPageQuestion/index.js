import { useState, useCallback } from 'react';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import QuestionItem from '../AnswerPageQuestionItem';
import QuestionItemContainer from './style';

const API_BASE_URL = 'https://openmind-api.vercel.app/3-5';

const AnswerPageQuestion = ({ user, id }) => {
  const [questions, setQuestions] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  const getUserQuestions = useCallback(async () => {
    const response = await fetch(
      `${API_BASE_URL}/subjects/${id}/questions/?limit=4&offset=${page * 4}`,
    );
    const responseQuestions = await response.json();
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
      {questions.length &&
        questions.map(question => (
          <QuestionItem key={question.id} user={user} question={question} />
        ))}
      {hasMore && <div ref={elementRef}>Load More Questoins...</div>}
    </QuestionItemContainer>
  );
};

export default AnswerPageQuestion;
