import Button from './style';

const GoToAnswer = () => {
  return (
    <Button>
      <p className="button-p">답변하러 가기</p>
      <img
        src="/assets/images/arrowRight.svg"
        alt="오른쪽화살표"
        className="button-img"
      />
    </Button>
  );
};

export default GoToAnswer;
