import styled from 'styled-components';

const Container = styled.div`
  background-color: #f9f9f9;

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
      border: 1px solid #818181;
      border-radius: 8px;
      position: relative;
      cursor: default;
      color: #818181;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 500;
      line-height: 18px;

      .list-main-ul-dropdown {
        position: absolute;
        top: 40px;
        left: 0px;
        border: 1px solid #cfcfcf;
        border-radius: 8px;
        background-color: #fff;

        li {
          width: 79px;
          padding: 6px 16px;
          color: #515151;
        }

        li:hover {
          color: #1877f2;
        }
      }
    }

    .list-main-ul.activated {
      color: #000;
      border: 1px solid #000;
    }
  }

  .list-section {
    width: 1200px;
    padding: 50px 130px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    .list-section-card {
      width: 220px;
      height: 187px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border: 1px solid #818181;
      border-radius: 16px;
      background-color: #fff;

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
          color: #818181;
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
    }

    .list-nav-pagebutton {
      float: left;
    }

    .list-nav-pagebutton,
    .list-nav-controlbutton {
      width: 40px;
      height: 40px;
      color: #818181;
      font-size: 2rem;
      font-style: normal;
      font-weight: 400;
      line-height: 25px;
      font-family: 'Actor', sans-serif;
      cursor: pointer;
      text-align: center;
    }

    .list-nav-pagebutton.selected {
      color: #542f1a;
    }
  }
`;

export default Container;
