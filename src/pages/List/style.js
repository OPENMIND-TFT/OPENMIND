import styled from 'styled-components';

const Container = styled.div`
  background-color: var(--Grayscale-20);

  .list-header {
    width: 100%;
    height: 137px;
    padding: 45px 130px;
    display: flex;
    justify-content: space-between;
  }

  .list-main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    .list-main-h1 {
      font-size: 4rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    .list-main-ul {
      padding: 8px 12px;
      display: flex;
      gap: 4px;
      border: 1px solid var(--Grayscale-40);
      border-radius: 8px;
      position: relative;
      cursor: default;
      color: var(--Grayscale-40);
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 500;
      line-height: 18px;

      .list-main-ul-dropdown {
        position: absolute;
        top: 40px;
        left: 0px;
        border: 1px solid var(--Grayscale-30);
        border-radius: 8px;
        background-color: var(--Grayscale-10);
        z-index: 1;

        li {
          width: 79px;
          padding: 6px 16px;
          color: var(--Grayscale-50);
        }

        li:hover {
          color: var(--Blue-50);
        }
      }
    }

    .list-main-ul.activated {
      color: var(--Grayscale-60);
      border: 1px solid var(--Grayscale-60);
    }
  }

  .list-section {
    max-width: 1200px;
    max-height: 396px;
    padding: 0 130px;
    margin: 30px auto 50px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    overflow: hidden;

    .list-section-card {
      max-width: 220px;
      height: 187px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border: 1px solid var(--Grayscale-40);
      border-radius: 16px;
      background-color: var(--Grayscale-10);
      transition: all 0.5s;
      transform: translateY(${props => props.y}px);

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
          font-size: 2rem;
          font-weight: 400;
          line-height: 25px;
        }
      }

      .card-questions {
        display: flex;
        justify-content: space-between;

        h3 {
          color: var(--Grayscale-40);
          font-size: 1.4rem;
        }

        div {
          display: flex;
          gap: 4px;
          align-items: center;

          img {
            width: 18px;
            height: 18px;
          }
        }
      }
    }
  }

  .list-nav {
    width: 280px;
    height: 40px;
    margin: 0 auto;
    display: flex;

    .list-nav-pagebutton-box {
      width: 200px;
      text-align: center;
      overflow: hidden;
      display: flex;
      flex-wrap: nowrap;
    }

    .list-nav-pagebutton {
      transition: all 0.5s;
      transform: translateX(${props => props.x}px);
    }

    .list-nav-pagebutton,
    .list-nav-controlbutton {
      min-width: 40px;
      height: 40px;
      color: var(--Grayscale-40);
      font-size: 2rem;
      font-style: normal;
      font-weight: 400;
      line-height: 25px;
      font-family: 'Actor', sans-serif;
      cursor: pointer;
      text-align: center;
    }

    .list-nav-pagebutton.selected {
      color: var(--Brown-40);
    }
  }
`;

export default Container;
