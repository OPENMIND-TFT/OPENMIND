import Button from './style';

const GoToAnswer = () => {
  return (
    <Button>
      <p className="button-p">답변하러 가기</p>
      <img
        src="/assets/images/arrowRight.svg"
        alt="arrow"
        className="button-img"
      />
    </Button>
  );
};

export default GoToAnswer;
