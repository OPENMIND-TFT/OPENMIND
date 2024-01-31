import FacebookShareButtonStyled from './style';

const FacebookShareButton = () => {
  const handleFacebookShare = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
    );
  };

  return (
    <FacebookShareButtonStyled type="button" onClick={handleFacebookShare}>
      <img src="/assets/images/facebook.svg" alt="페이스북 공유" />
    </FacebookShareButtonStyled>
  );
};

export default FacebookShareButton;
