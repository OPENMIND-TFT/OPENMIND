import GoToButton from './style';

const GoToAnswer = ({ children, onClick, type = 'button' }) => {
  return (
    <GoToButton type={type} onClick={onClick}>
      <span>{children}</span>
      <img
        src="/assets/images/arrowRight.svg"
        alt="오른쪽화살표"
        className="button-img"
      />
    </GoToButton>
  );
};

export default GoToAnswer;
