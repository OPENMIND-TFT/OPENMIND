import styled from 'styled-components';

const DropDownContainer = styled.div`
  .dropdown-box {
    position: absolute;
    top: 25px;
    right: -5px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    border-radius: 8px;
    border: 1px solid var(--Grayscale-30);
    background: var(--Grayscale-10);
    box-shadow: 0px 4px 4px 0px rgba(140, 140, 140, 0.25);
    padding: 12px 0;
    width: 120px;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      cursor: pointer;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        gap: 8px;
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 18px;
        color: var(--Grayscale-50);
        background: none;
        border: none;
        border-radius: 8px;
        cursor: pointer;

        &:hover {
          color: var(--Blue-50);
          background: var(--Grayscale-10);
        }
      }
    }
  }
`;

export default DropDownContainer;
