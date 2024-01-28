import CtaButton from './style';

const Cta = ({
  children,
  width,
  height,
  onClick,
  disabled,
  type = 'button',
}) => {
  return (
    <CtaButton
      type={type}
      width={width}
      height={height}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </CtaButton>
  );
};

export default Cta;
