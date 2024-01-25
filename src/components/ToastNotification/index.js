import { useEffect } from 'react';
import ToastStyled from './style';
// 수정수정
const ToastNotification = ({ children, setIsToastVisible }) => {
  useEffect(() => {
    const toastTimeout = setTimeout(() => {
      setIsToastVisible(false);
    }, 5000);

    return () => {
      clearTimeout(toastTimeout);
    };
  }, [setIsToastVisible]);

  return <ToastStyled>{children}</ToastStyled>;
};

export default ToastNotification;
