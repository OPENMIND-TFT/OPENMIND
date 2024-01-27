import CopyClipBoardButton from '../CopyClipBoardButton';
import KakaoShareButton from '../KakaoShareButton';
import FacebookShareButton from '../FacebookShareButton';
import ShareButtonBarContainer from './style';

const ShareButtonBar = () => {
  return (
    <ShareButtonBarContainer>
      <CopyClipBoardButton />
      <KakaoShareButton />
      <FacebookShareButton />
    </ShareButtonBarContainer>
  );
};

export default ShareButtonBar;
