import CtaButton from './style';

const Cta = ({ children, width, height, onClick, type = 'button' }) => {
  return (
    <CtaButton type={type} width={width} height={height} onClick={onClick}>
      {children}
    </CtaButton>
  );
};

export default Cta;
