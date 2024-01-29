import { useState, useCallback } from 'react';
import getUserQuestionData from '../api/getUserQuestionData';
import useInfiniteScroll from './useInfiniteScroll';

const useGetUserQuestions = id => {
  const [questions, setQuestions] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  const getUserQuestions = useCallback(async () => {
    const delay = ms =>
      new Promise(res => {
        setTimeout(() => {
          res();
        }, ms);
      });
    await delay(500);

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
  }, [id, page]);

  const elementRef = useInfiniteScroll(getUserQuestions);

  return { questions, hasMore, elementRef, setQuestions };
};

export default useGetUserQuestions;
