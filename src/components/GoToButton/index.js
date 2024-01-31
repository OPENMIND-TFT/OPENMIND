import GoToButtonStyled from './style';

const GoToButton = ({ children, onClick, type = 'button' }) => {
  return (
    <GoToButtonStyled type={type} onClick={onClick}>
      <span>{children}</span>
      <img
        src="/assets/images/arrowRight.svg"
        alt="오른쪽화살표"
        className="button-img"
      />
    </GoToButtonStyled>
  );
};

export default GoToButton;
