import { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Container from './style';
import GoToAnswer from '../../components/GoToAnswer';
import BackToMain from '../../components/BackToMain';

const List = () => {
  const [dropDown, setDropDown] = useState(false);
  const [sortBy, setSortBy] = useState('최신순');
  const [cardInfo, setCardInfo] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const sliderRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://openmind-api.vercel.app/3-5/subjects/?limit=${itemsPerPage}&offset=${
          (currentPage - 1) * itemsPerPage
        }`,
      );
      const data = await response.json();
      setCardInfo(data['results']);
      setTotalItems(data['count']);
    }
    fetchData();
  }, [currentPage, itemsPerPage]);

  function handleSorting(e) {
    // 정렬기능
    setSortBy(e.target.innerHTML);
    const selectedSort = e.target.innerHTML;
    if (selectedSort === '이름순') {
      setCardInfo([...cardInfo].sort((a, b) => a.name.localeCompare(b.name)));
    } else if (selectedSort === '최신순') {
      setCardInfo([...cardInfo].sort((a, b) => b.id - a.id));
    }

    setSortBy(selectedSort);
  }

  function handlePageChange(newPage) {
    setCurrentPage(newPage);
  }

  function goToPrev() {
    sliderRef.current.slickPrev();
  }

  function goToNext() {
    sliderRef.current.slickNext();
  }

  return (
    <Container>
      <header className="list-header">
        <BackToMain />
        <GoToAnswer />
      </header>

      <main className="list-main">
        <h1 className="list-main-h1">누구에게 질문할까요?</h1>
        <ul
          className={`list-main-ul ${dropDown ? 'activated' : ''}`}
          onKeyDown={() => {}}
          role="presentation"
          onClick={() => {
            setDropDown(!dropDown);
          }}
        >
          {sortBy}
          <img
            src={
              !dropDown
                ? `/assets/images/arrowDown.svg`
                : `/assets/images/arrowUp.svg`
            }
            alt="arrow"
          />
          {dropDown && (
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
          onClick={goToPrev}
          onKeyDown={() => {}}
          role="presentation"
        >
          {'<'}
        </div>
        <Slider
          className="list-nav-pagebutton-box"
          ref={sliderRef}
          dots
          infinite={false}
          speed={0}
          slidesToShow={5}
          slidesToScroll={5}
        >
          {Array.from({ length: totalPages }, (_, index) => (
            <div
              className={`list-nav-pagebutton ${
                currentPage === index + 1 ? 'selected' : ''
              }`}
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              onKeyDown={() => {}}
              role="presentation"
            >
              {index + 1}
            </div>
          ))}
        </Slider>
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
