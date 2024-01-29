import styled from 'styled-components';

const CtaStyled = styled.button`
  display: inline-block;
  width: ${props => (props.width ? props.width : 'unset')};
  height: ${props => (props.height ? props.height : 'unset')};
  z-index: 1;
  padding: 12px 24px;
  border: 1px solid transparent;
  border-radius: 8px;
  outline: 0;
  background: var(--Brown-40);
  color: var(--Grayscale-10);
  font-size: 1.6em;
  font-weight: 400;
  font-feature-settings:
    'clig' off,
    'liga' off;
  transition: 0.3s all;
  cursor: pointer;

  &:hover {
    border-color: var(--Brown-40);
    background: var(--Grayscale-10);
    color: var(--Brown-50);
  }

  &:disabled {
    background: var(--Brown-30);
    cursor: default;

    &:hover {
      border: 1px solid transparent;
      background: var(--Brown-30);
      color: var(--Grayscale-10);
    }
  }
`;

export default CtaStyled;
