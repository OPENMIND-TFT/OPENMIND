import styled from 'styled-components';

const EditButtonContainer = styled.div`
  .edit-button {
    margin-top: 24px;
    gap: 8px;
    color: var(--Grayscale-50);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 18px;
    display: flex;
    width: 103px;
    padding: 10px 15px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 1px solid var(--Grayscale-30);
    background: var(--Grayscale-10);
    box-shadow: 0px 4px 4px 0px rgba(140, 140, 140, 0.25);

    img {
      width: 14px;
      height: 14px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1124px) {
    .edit-button {
      display: none;
    }
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    .edit-button {
      display: none;
    }
  }
`;

export default EditButtonContainer;
