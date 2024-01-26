import { useEffect } from 'react';
import KakaoShareButtonStyled from './style';

const KakaoShareButton = () => {
  const { Kakao } = window;
  const realUrl = '';
  // const resultUrl = window.location.href;

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init('cee8f493f2e0af4b4d91def7f810a26c');
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '오늘의 디저트',
        description: '아메리카노, 빵, 케익',
        imageUrl:
          'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
        link: {
          mobileWebUrl: realUrl,
        },
      },
      buttons: [
        {
          title: '나도 테스트 하러가기',
          link: {
            mobileWebUrl: realUrl,
          },
        },
      ],
    });
  };

  return (
    <KakaoShareButtonStyled type="button" onClick={shareKakao}>
      <img src="/assets/images/kakaotalk.svg" alt="카카오톡 공유" />
    </KakaoShareButtonStyled>
  );
};

export default KakaoShareButton;
