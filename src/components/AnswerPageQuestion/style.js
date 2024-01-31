import styled from 'styled-components';

const QuestionItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .loading-spinner {
    display: flex;
    justify-content: center;
    margin-top: 0;

    img {
      width: 80px;
    }
  }
`;

export default QuestionItemContainer;
