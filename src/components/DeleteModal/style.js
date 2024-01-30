import styled from 'styled-components';

const DeleteModalContainer = styled.div`
  .modal-container {
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    z-index: 9999;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .modal-content-box {
      width: 220px;
      height: 170px;
      border-radius: 24px;
      background: var(--Grayscale-10);
      box-shadow: 0px 16px 20px 0px rgba(48, 48, 48, 0.62);
      padding: 30px;
      font-family: 'Actor', 'pretendard';
    }

    .delete-content {
      font-size: 1.6rem;
    }

    .delete-content-emphasis {
      font-size: 1.4rem;
      color: var(--Grayscale-40);
      margin: 20px 0;
    }

    .button-box {
      display: flex;
      justify-content: flex-end;
      margin-top: 45px;
      gap: 35px;
    }

    .cancle-button,
    .delete-button {
      border: 0;
      cursor: pointer;
      background: var(--Grayscale-10);
      font-size: 1.4rem;

      &:hover {
        color: var(--Blue-50);
      }
    }
  }
`;

export default DeleteModalContainer;
