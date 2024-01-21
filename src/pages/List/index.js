import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Container from './style';
import GoToAnswer from '../../components/GoToAnswer';
import BackToMain from '../../components/BackToMain';

const List = () => {
  const [subjects, setSubjects] = useState([]);
  const [isDropDown, setIsDropDown] = useState(false);
  const [sortBy, setSortBy] = useState('최신순');
  const [cardInfo, setCardInfo] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [translateY, setTranslateY] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [currentScroll, setCurrentScroll] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    // 카드정보 호출
    async function fetchData() {
      const response = await fetch(
        `https://openmind-api.vercel.app/3-5/subjects/?limit=${subjects.count ?? 999}&offset=0`,
      );
      const data = await response.json();
      setSubjects(data);
      setCardInfo(data['results']);
      setTotalItems(data['count']);
    }
    fetchData();
  }, []);

  if (!cardInfo) {
    return null;
  }

  const handleSorting = e => {
    // 정렬기능
    const selectedSort = e.target.innerHTML;
    if (selectedSort === '이름순') {
      setCardInfo(
        [...cardInfo].sort((a, b) =>
          a.name.localeCompare(b.name, undefined, {
            numeric: true,
          }),
        ),
      );
    } else if (selectedSort === '최신순') {
      setCardInfo([...cardInfo].sort((a, b) => b.id - a.id));
    }

    setSortBy(selectedSort);
  };

  const handlePageChange = e => {
    // 페이지이동
    setCurrentPage(Number(e.target.innerHTML));
    setTranslateY((Number(e.target.innerHTML) - 1) * -414);
  };

  const goToPrev = () => {
    // 이전 페이지리스트
    if (currentScroll > 1) {
      setTranslateX(translateX + 200);
      setCurrentScroll(currentScroll - 1);
    }
  };

  const goToNext = () => {
    // 다음 페이지리스트
    if (currentScroll < Math.ceil(totalPages / 5)) {
      setTranslateX(translateX - 200);
      setCurrentScroll(currentScroll + 1);
    }
  };

  return (
    <Container x={translateX} y={translateY}>
      <header className="list-header">
        <BackToMain />
        <GoToAnswer />
      </header>

      <main className="list-main">
        <h1 className="list-main-h1">누구에게 질문할까요?</h1>
        <ul
          className={`list-main-ul ${isDropDown ? 'activated' : ''}`}
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
            <div className="list-main-ul-dropdown">
              <li
                className="list-main-li"
                onClick={handleSorting}
                onKeyDown={() => {}}
                role="presentation"
              >
                이름순
              </li>
              <li
                className="list-main-li"
                onClick={handleSorting}
                onKeyDown={() => {}}
                role="presentation"
              >
                최신순
              </li>
            </div>
          )}
        </ul>
      </main>

      <section className="list-section">
        {cardInfo.map(item => {
          return (
            <Link to={`/post/${item.id}`} key={item.id}>
              <article className="list-section-card">
                <div className="card-profile">
                  <img
                    src={item.imageSource}
                    alt="프로필사진"
                    className="card-profile-img"
                  />
                  <h2 className="card-profile-h2">{item.name}</h2>
                </div>
                <div className="card-questions">
                  <div className="card-questions-div">
                    <img
                      src="/assets/images/messages.svg"
                      alt="메세지아이콘"
                      className="card-questions-img"
                    />
                    <h3 className="card-questions-h3">받은질문</h3>
                  </div>
                  <h3 className="card-questions-h3">{item.questionCount}개</h3>
                </div>
              </article>
            </Link>
          );
        })}
      </section>

      <nav className="list-nav">
        <div
          className="list-nav-controlbutton"
          onClick={goToPrev}
          onKeyDown={() => {}}
          role="presentation"
        >
          {'<'}
        </div>
        <div className="list-nav-pagebutton-box">
          {Array.from({ length: totalPages }, (_, index) => (
            <div
              onClick={e => handlePageChange(e)}
              className={`list-nav-pagebutton ${currentPage === index + 1 ? 'selected' : ''}`}
              key={index + 1}
              onKeyDown={() => {}}
              role="presentation"
            >
              {index + 1}
            </div>
          ))}
        </div>
        <div
          className="list-nav-controlbutton"
          onClick={goToNext}
          onKeyDown={() => {}}
          role="presentation"
        >
          {'>'}
        </div>
      </nav>
    </Container>
  );
};

export default List;
