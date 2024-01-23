import CtaButton from './style';

const Cta = ({ children, width, height }) => {
  return (
    <CtaButton type="button" width={width} height={height}>
      {children}
    </CtaButton>
  );
};

export default Cta;
