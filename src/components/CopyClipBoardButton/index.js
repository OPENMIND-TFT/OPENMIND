import { useState } from 'react';
import ToastNotification from '../ToastNotification';
import CopyClipBoardButtonStyled from './style';

const CopyClipBoardButton = () => {
  const [isToastVisible, setIsToastVisible] = useState(false);

  const handleCopyClipBoardLink = async text => {
    try {
      await navigator.clipboard.writeText(text);
      setIsToastVisible(true);
    } catch (event) {
      throw new Error('클립보드 링크 복사에 실패했습니다.');
    }
  };

  return (
    <CopyClipBoardButtonStyled
      type="button"
      onClick={() => handleCopyClipBoardLink(window.location.href)}
    >
      <img src="/assets/images/link.svg" alt="링크 복사하기" />
      {isToastVisible && (
        <ToastNotification setIsToastVisible={setIsToastVisible}>
          URL이 복사되었습니다
        </ToastNotification>
      )}
    </CopyClipBoardButtonStyled>
  );
};

export default CopyClipBoardButton;
