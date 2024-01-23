import styled from 'styled-components';

const Container = styled.div`
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;

  .modal-window {
    background-color: var(--Grayscale-10);
    width: 100%;
    max-width: 612px;
    min-height: 454px;
    border-radius: 24px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    position: relative;

    .modal-title {
      display: flex;
      gap: 8px;
      margin-bottom: 40px;

      .modal-title-img {
        width: 28px;
        height: 28px;
        filter: brightness(0);
      }

      .modal-title-h1 {
        color: var(--Grayscale-60);
        font-family: Actor;
        font-size: 2.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 30px;
      }
    }

    .modal-X {
      width: 28px;
      height: 28px;
      position: absolute;
      top: 40px;
      right: 40px;
      cursor: pointer;
    }

    .modal-profile {
      display: flex;
      gap: 4px;
      align-items: center;
      margin-bottom: 20px;

      .modal-profile-h2 {
        color: var(--Grayscale-60);
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
      }

      .modal-profile-img {
        width: 28px;
        height: 28px;
        border-radius: 100%;
      }
    }

    .modal-textarea {
      width: 100%;
      max-width: 532px;
      min-height: 180px;
      padding: 16px;
      border: 0px;
      border-radius: 8px;
      background: var(--Grayscale-20);
      resize: none;
      margin-bottom: 8px;
    }
    &:focus {
      outline: none;
    }

    .modal-button {
      padding: 12px 24px;
      border-radius: 8px;
      background: var(--Brown-40);
      border: 0px;
      color: var(--Grayscale-10);
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      cursor: pointer;
    }

    &:disabled {
      background: var(--Brown-30);
      cursor: default;
    }
  }

  @media screen and (max-width: 425px) {
    .modal-window {
      .modal-title {
        .modal-title-h1 {
          font-size: 2rem;
        }
      }

      .modal-X {
        width: 22px;
        height: 22px;
      }

      .modal-textarea {
        min-height: 358px;
      }
    }
  }
`;

export default Container;
