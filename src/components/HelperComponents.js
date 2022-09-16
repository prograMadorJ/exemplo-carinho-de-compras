import styled from 'styled-components';

export const FlexGroup = styled.div`
  width: 100%;
  display: flex;
  ${(props) => (props.fillHeight ? 'height: 100%;' : '')} 
  ${(props) => (props.wrap ? 'flex-wrap: wrap;' : '')} 
  ${(props) => (props.flex >= 0 ? 'flex: ' + props.flex + ';' : '')};
  ${(props) =>
    props.direction ? 'flex-direction: ' + props.direction + ';' : ''}
  ${(props) => (props.justify ? 'justify-content: ' + props.justify + ';' : '')}
  ${(props) => (props.align ? 'align-items: ' + props.align + ';' : '')}
`;
