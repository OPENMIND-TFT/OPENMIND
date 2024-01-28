import styled from 'styled-components';

const LogoContainer = styled.div`
  a {
    display: block;
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
  }
`;

export default LogoContainer;
