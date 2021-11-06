import React from 'react';
import styled from 'styled-components'
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

  const StyledModalBody = styled.div`
    padding-top: 10px;
  `;
  
  const StyledModalHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 25px;
    & > a {
      text-decoration: none;
      color: darkgrey;
    }
  `;

  const StyledModalTitle = styled.h3`
    ${props => props.theme.h3}

  `;
  
  // the wrapper component
  const StyledModalWrapper = styled.div`
    max-width: 500px;
    max-height: 600px;
  `;
  
  const StyledModal = styled.div`
    background: white;
    height:100%;
    width:100%;
    border-radius: 15px;
    padding: 15px;
  `;

  const StyledModalOverlay = styled.div`
    position: fixed;
    z-index: 3;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
  `;

const Modal = ({ onClose, children, title, show }) => {
    const [isBrowser, setIsBrowser] = React.useState(false);

    // create ref for the StyledModalWrapper component
    const modalWrapperRef = React.useRef();

    // check if the user has clickedinside or outside the modal
    const backDropHandler = e => {
      if (!modalWrapperRef?.current?.contains(e.target)) {
          onClose();
      }
    }
  
    React.useEffect(() => {
      setIsBrowser(true);

     // attach event listener to the whole windor with our handler
      window.addEventListener('click', backDropHandler);

      // remove the event listener when the modal is closed
      return () => window.removeEventListener('click', backDropHandler);
    }, []);

    const handleCloseClick = (e) => {
      e.preventDefault();
      onClose();
    };
  
    const modalContent = show ? (
      <StyledModalOverlay>
        <StyledModalWrapper ref={modalWrapperRef}>
            <StyledModal>
              <StyledModalHeader>
                  <a href="#" title="Fermer la fenêtre" onClick={handleCloseClick}>
                  <FontAwesomeIcon icon={faTimesCircle} />
                  </a>
              </StyledModalHeader>
              {title && <StyledModalTitle>{title}</StyledModalTitle>}
              <StyledModalBody>{children}</StyledModalBody>
            </StyledModal>
        </StyledModalWrapper>
      </StyledModalOverlay>
    ) : null;
  
    if (isBrowser) {
      return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root")
      );
    } else {
      return null;
    }
};

export default Modal