import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: ${props => (props.visible ? 'block' : 'none')};
`;

export const ModalContent = styled.div`
  position: fixed;
  background: white;
  width: ${props => (props.width ? props.width : '50%')};
  height: ${props => (props.height ? props.height : '50%')};
  border-radius: 4px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const MHeader = styled.div`
  height: 15%;
  border-bottom: 1px solid #eee;
  width: 100%;
`;
export const MBody = styled.div`
  height: 70%;
  width: 100%;
`;
export const MFooter = styled.div`
  height: 15%;
  border-top: 1px solid #eee;
  width: 100%;
`;
