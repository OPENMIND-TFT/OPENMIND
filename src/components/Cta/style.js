import styled from 'styled-components';

const CtaButton = styled.button`
  width: ${props => (props.width ? props.width : 'unset')};
  height: ${props => (props.height ? props.height : 'unset')};
  display: inline-block;
  border-radius: 8px;
  font-size: 1.6em;
  font-feature-settings:
    'clig' off,
    'liga' off;
  background: var(--Brown-40);
  color: var(--Grayscale-10);
  padding: 12px 24px;
  border: 1px solid transparent;
  outline: 0;
  transition: 0.3s all;
  z-index: 1;
  cursor: pointer;

  &:hover {
    background: var(--Grayscale-10);
    color: var(--Brown-50);
    border-color: var(--Brown-40);
  }

  &:disabled {
    background: var(--Brown-30);
    cursor: default;

    &:hover {
      background: var(--Brown-30);
      color: var(--Grayscale-10);
      border: 1px solid transparent;
    }
  }
`;

export default CtaButton;
