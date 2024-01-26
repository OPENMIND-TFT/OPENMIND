import { useEffect } from 'react';
import KakaoShareButtonStyled from './style';

const KakaoShareButton = () => {
  const { Kakao } = window;
  const realUrl = 'https://harmonious-dusk-d79620.netlify.app/';

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init('cee8f493f2e0af4b4d91def7f810a26c');
  }, []);

  const handleShareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '오픈마인드',
        description: '마음을 열고 대화를 주고 받는 소통 플랫폼, 오픈마인드',
        imageUrl:
          'https://harmonious-dusk-d79620.netlify.app/assets/images/kakaoShareImage.png',
        link: {
          mobileWebUrl: realUrl,
        },
      },
      buttons: [
        {
          title: '함께 참여하러 가기',
          link: {
            mobileWebUrl: realUrl,
          },
        },
      ],
    });
  };

  return (
    <KakaoShareButtonStyled type="button" onClick={handleShareKakao}>
      <img src="/assets/images/kakaotalk.svg" alt="카카오톡 공유" />
    </KakaoShareButtonStyled>
  );
};

export default KakaoShareButton;
