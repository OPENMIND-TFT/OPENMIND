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

  function handleSorting(e) {
    // 정렬기능
    setSortBy(e.target.innerHTML);
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
  }

  function handlePageChange(e) {
    setCurrentPage(Number(e.target.innerHTML));
    setTranslateY((Number(e.target.innerHTML) - 1) * -414);
  }

  function goToPrev() {
    if (currentScroll > 1) {
      setTranslateX(translateX + 200);
      setCurrentScroll(currentScroll - 1);
    }
  }

  function goToNext() {
    if (currentScroll < Math.ceil(totalPages / 5)) {
      setTranslateX(translateX - 200);
      setCurrentScroll(currentScroll + 1);
    }
  }

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
            alt="arrow"
          />
          {isDropDown && (
            <div className="list-main-ul-dropdown">
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
      </main>

      <section className="list-section">
        {cardInfo.map(item => {
          return (
            <article className="list-section-card" key={item.id}>
              <div className="card-profile">
                <img src={item.imageSource} alt="profile" />
                <h2>{item.name}</h2>
              </div>
              <div className="card-questions">
                <div>
                  <img src="/assets/images/messages.svg" alt="message" />
                  <h3>받은질문</h3>
                </div>
                <h3>{item.questionCount}개</h3>
              </div>
            </article>
          );
        })}
      </section>

      <nav className="list-nav">
        <div
          className="list-nav-controlbutton"
          onClick={goToPrev} // 체크포인트
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
