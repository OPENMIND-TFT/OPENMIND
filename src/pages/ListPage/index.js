import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import ListContainer from './style';
import GoToAnswer from '../../components/GoToAnswer';
import BackToMain from '../../components/BackToMain';
import getCardData from '../../api/getCardData';
import 'react-loading-skeleton/dist/skeleton.css';

const ListPage = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [sortBy, setSortBy] = useState('최신순');
  const [cardInfo, setCardInfo] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [translateX, setTranslateX] = useState(0);
  const [currentScroll, setCurrentScroll] = useState(1);
  const [pageSet, setPageSet] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const totalPages = Math.ceil(totalItems / 8);

  const fetchData = async () => {
    setIsLoading(true);
    const delay = ms =>
      new Promise(res => {
        setTimeout(() => {
          res();
        }, ms);
      });
    await delay(1000);
    const data = await getCardData(sortBy, currentPage);
    setCardInfo(data['results']);
    setTotalItems(data['count']);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [currentPage, sortBy]);

  if (!cardInfo) {
    return null;
  }
  const goToPrev = () => {
    // 이전 페이지리스트
    if (currentScroll > 1) {
      setTranslateX(translateX + 200);
      setCurrentScroll(currentScroll - 1);
      const firstPage = pageSet - 5;
      setPageSet(firstPage);
      setCurrentPage(firstPage);
    }
  };

  const goToNext = () => {
    // 다음 페이지리스트
    if (currentScroll < Math.ceil(totalPages / 5)) {
      setTranslateX(translateX - 200);
      setCurrentScroll(currentScroll + 1);
      const firstPage = pageSet + 5;
      setPageSet(firstPage);
      setCurrentPage(firstPage);
    }
  };

  const handleSorting = e => {
    // 정렬기능
    const selectedSort = e.target.innerHTML;
    setCurrentPage(1);
    setTranslateX(0);
    setCurrentScroll(1);
    setSortBy(selectedSort);
  };

  const handlePageChange = e => {
    // 페이지이동
    setCurrentPage(Number(e.target.innerHTML));
  };

  return (
    <ListContainer x={translateX}>
      <header className="list-header">
        <div className="list-header-inner">
          {isLoading ? (
            <Skeleton className="skeleton-logo-style" />
          ) : (
            <BackToMain width="146px" />
          )}
          {isLoading ? (
            <Skeleton className="skeleton-answer-style" />
          ) : (
            <GoToAnswer />
          )}
        </div>
      </header>

      <article className="list-filter-area">
        {isLoading ? (
          <Skeleton className="skeleton-title-style" />
        ) : (
          <h1>누구에게 질문할까요?</h1>
        )}
        {isLoading ? (
          <Skeleton className="skeleton-filter-style" />
        ) : (
          <ul
            className={`${isDropDown ? 'activated' : ''}`}
            onKeyDown={() => {}}
            role="presentation"
            onClick={() => {
              setIsDropDown(!isDropDown);
            }}
          >
            {sortBy}
            <img
              src={
                !isDropDown
                  ? `/assets/images/arrowDown.svg`
                  : `/assets/images/arrowUp.svg`
              }
              alt="정렬버튼 화살표"
            />
            {isDropDown && (
              <div className="list-filter-dropdown">
                <li
                  onClick={handleSorting}
                  onKeyDown={() => {}}
                  role="presentation"
                >
                  이름순
                </li>
                <li
                  onClick={handleSorting}
                  onKeyDown={() => {}}
                  role="presentation"
                >
                  최신순
                </li>
              </div>
            )}
          </ul>
        )}
      </article>

      <main className="list-content">
        {isLoading ? (
          <>
            <Skeleton className="skeleton-card-style" />
            <Skeleton className="skeleton-card-style" />
            <Skeleton className="skeleton-card-style" />
            <Skeleton className="skeleton-card-style" />
            <Skeleton className="skeleton-card-style" />
            <Skeleton className="skeleton-card-style" />
            <Skeleton className="skeleton-card-style" />
            <Skeleton className="skeleton-card-style" />
          </>
        ) : (
          cardInfo.map(item => {
            return (
              <Link to={`/post/${item.id}`} key={item.id}>
                <article className="list-content-card">
                  <div className="card-profile">
                    <img
                      src={item.imageSource}
                      alt="프로필사진"
                      className="card-profile-img"
                    />
                    <h2 className="card-profile-name">{item.name}</h2>
                  </div>
                  <div className="card-questions">
                    <h3 className="card-questions-title">
                      <img
                        src="/assets/images/messages.svg"
                        alt="메세지아이콘"
                        className="card-questions-img"
                      />
                      받은 질문
                    </h3>
                    <span className="card-questions-count">
                      {item.questionCount}개
                    </span>
                  </div>
                </article>
              </Link>
            );
          })
        )}
      </main>
      <nav className="list-pagination">
        {isLoading ? (
          <Skeleton className="skeleton-pagenation-style" />
        ) : (
          <>
            <button
              type="button"
              className="list-pagenation-prev list-pagenation-controlbutton"
              onClick={goToPrev}
            >
              {'<'}
            </button>
            <div className="list-pagenation-button-wrapper">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  type="button"
                  onClick={e => handlePageChange(e)}
                  className={`list-nav-pagebutton ${currentPage === index + 1 ? 'selected' : ''}`}
                  key={index + 1}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="list-pagenation-next list-pagenation-controlbutton"
              onClick={goToNext}
            >
              {'>'}
            </button>
          </>
        )}
      </nav>
    </ListContainer>
  );
};

export default ListPage;
