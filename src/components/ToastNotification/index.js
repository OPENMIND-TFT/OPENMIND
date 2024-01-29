import { useEffect } from 'react';
import ToastStyled from './style';

const ToastNotification = ({ children, setIsToastVisible }) => {
  useEffect(() => {
    const toastTimeout = setTimeout(() => {
      setIsToastVisible(false);
    }, 2000);

    return () => {
      clearTimeout(toastTimeout);
    };
  }, [setIsToastVisible]);

  return <ToastStyled>{children}</ToastStyled>;
};

export default ToastNotification;
