import CtaStyled from './style';

const Cta = ({
  children,
  width,
  height,
  onClick,
  disabled,
  type = 'button',
}) => {
  return (
    <CtaStyled
      type={type}
      width={width}
      height={height}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </CtaStyled>
  );
};

export default Cta;
