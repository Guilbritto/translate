import React, { useRef, useEffect } from 'react';

import { ModalWrapper, ModalContent, MHeader, MBody, MFooter } from './styles';

export function Modal(props) {
  function handleVisible() {
    props.changeVisibility(!props.visible);
  }
  /**
   * Hook that alerts clicks outside of the passed ref
   */
  function useOutsideAlerter(ref) {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handleVisible();
      }
    }

    useEffect(() => {
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    });
  }
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <ModalWrapper visible={props.visible}>
      <div ref={wrapperRef}>
        <ModalContent className="animated fadeIn">
          {props.children}
        </ModalContent>
      </div>
      ;
    </ModalWrapper>
  );
}

export function ModalHeader(props) {
  return <MHeader>{props.children}</MHeader>;
}
export function ModalBody(props) {
  return <MBody>{props.children}</MBody>;
}
export function ModalFooter(props) {
  return <MFooter>{props.children}</MFooter>;
}
