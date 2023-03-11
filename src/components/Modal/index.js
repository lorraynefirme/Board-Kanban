import { createPortal } from "react-dom";
import { AiFillCloseCircle } from 'react-icons/ai';
import { Modals, ModalContent } from './styles';

const iconProps = {
  color: '#9d8189',
  size: 24
}

export default function Modal ({ isOpened, children, onClose }) {

  if (!isOpened) {
    return null;
  }
  return createPortal(
    <>
    
      <Modals>
        <ModalContent>
          <span >
            <AiFillCloseCircle onClick={onClose} {...iconProps} />
          </span>     
          <div>{children}</div>
        </ModalContent>
      </Modals>
    </>,
    document.getElementById("modal")
  );
};

