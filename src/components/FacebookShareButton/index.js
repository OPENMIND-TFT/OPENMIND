import FacebookShareButtonStyled from './style';

const FacebookShareButton = () => {
  return (
    <FacebookShareButtonStyled
      type="button"
      className="sns-button facebook-color"
    >
      <img src="/assets/images/facebook.svg" alt="페이스북 공유" />
    </FacebookShareButtonStyled>
  );
};

export default FacebookShareButton;
