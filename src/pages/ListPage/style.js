import styled from 'styled-components';

const ListContainer = styled.div`
  .list-header {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 137px;
    padding: 45px 130px 0;

    .list-header-inner {
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-width: 1200px;
    }
  }

  .list-filter-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    h1 {
      font-size: 4rem;
      font-weight: 400;
    }

    ul {
      display: flex;
      gap: 4px;
      position: relative;
      padding: 8px 12px;
      border: 1px solid var(--Grayscale-40);
      border-radius: 8px;
      color: var(--Grayscale-40);
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 18px;
      cursor: pointer;

      .list-filter-dropdown {
        position: absolute;
        top: 40px;
        left: 0px;
        border: 1px solid var(--Grayscale-30);
        border-radius: 8px;
        background-color: var(--Grayscale-10);
        z-index: 1;
        box-shadow: 0px 4px 4px 0px rgba(140, 140, 140, 0.25);

        li {
          width: 80px;
          padding: 6px 16px;
          color: var(--Grayscale-50);

          &:hover {
            color: var(--Blue-50);
          }
        }
      }
    }

    ul.activated {
      border: 1px solid var(--Grayscale-60);
      color: var(--Grayscale-60);
    }
  }

  .list-content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 30px 130px 50px;

    .list-content-card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-width: 220px;
      height: 187px;
      padding: 20px;
      border: 1px solid var(--Grayscale-40);
      border-radius: 16px;
      background-color: var(--Grayscale-10);
      cursor: pointer;

      .card-profile {
        display: flex;
        flex-direction: column;
        gap: 12px;

        img {
          width: 60px;
          height: 60px;
          border-radius: 100%;
        }

        h2 {
          color: var(--Grayscale-60);
          font-size: 2rem;
          font-weight: 400;
          line-height: 25px;
        }
      }

      .card-questions {
        display: flex;
        justify-content: space-between;
        color: var(--Grayscale-40);
        font-size: 1.6rem;

        h3 {
          display: flex;
          align-items: center;
          gap: 4px;
          font-weight: 400;
          font-size: 1.6rem;

          img {
            width: 18px;
            height: 18px;
          }
        }
      }
    }
  }

  .list-pagination {
    display: flex;
    width: 280px;
    height: 40px;
    margin: 0 auto;

    .list-pagenation-controlbutton,
    .list-nav-pagebutton {
      min-width: 40px;
      height: 40px;
      border: none;
      outline: none;
      background: transparent;
      color: var(--Grayscale-40);
      font-family: 'Actor', sans-serif;
      font-size: 2rem;
      cursor: pointer;
    }

    .list-pagenation-button-wrapper {
      display: flex;
      overflow: hidden;
      width: 200px;

      button {
        transition: all 0.5s;
        transform: translateX(${props => props.x}px);
      }

      button.selected {
        color: var(--Brown-40);
      }
    }
  }

  /* 반응형 */
  @media screen and (max-width: 1199px) {
    .list-header {
      padding: 40px 50px;
    }

    .list-content {
      padding: 30px 32px 50px;

      .list-content-card {
        max-width: unset;
      }
    }
  }

  @media screen and (max-width: 868px) {
    .list-content {
      grid-template-columns: repeat(3, 1fr);
      padding-bottom: 60px;
    }

    .list-pagination {
      margin-bottom: 60px;
    }
  }

  @media screen and (max-width: 425px) {
    .list-content {
      grid-template-columns: repeat(2, 1fr);
    }

    .list-header {
      height: unset;

      .list-header-inner {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
      }
    }

    .list-filter-area {
      flex-direction: initial;
      justify-content: space-between;
      padding: 0 24px;

      h1 {
        font-size: 2.4rem;
      }
    }

    .list-content {
      padding: 20px 24px 40px;
    }

    .list-pagination {
      margin-bottom: 40px;
    }
  }
`;

export default ListContainer;
