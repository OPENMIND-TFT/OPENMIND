import KakaoShareButtonStyled from './style';

const KakaoShareButton = () => {
  return (
    <KakaoShareButtonStyled
      type="button"
      className="sns-button kakaotalk-color"
    >
      <img src="/assets/images/kakaotalk.svg" alt="카카오톡 공유" />
    </KakaoShareButtonStyled>
  );
};

export default KakaoShareButton;
