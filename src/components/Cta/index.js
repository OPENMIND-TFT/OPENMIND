import CtaButton from './style';

const Cta = ({ children, width, height, onClick }) => {
  return (
    <CtaButton type="button" width={width} height={height} onClick={onClick}>
      {children}
    </CtaButton>
  );
};

export default Cta;
