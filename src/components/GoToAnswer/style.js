import styled from 'styled-components';

const Button = styled.button`
  padding: 12px 24px;
  display: flex;
  gap: 8px;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #542f1a;
  background-color: #f5f1ee;
  cursor: pointer;

  .button-p {
    color: #542f1a;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 22px;
  }

  .button-img {
    width: 18px;
    height: 18px;
  }
`;

export default Button;
