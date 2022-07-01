import React from 'react';
import { InputGroup, Icon, Modal, Button } from 'rsuite';
import { useModalState } from '../../../misc/custom-hooks';

const AttachmentBtnModal = () => {
  const { isOpen, close, open } = useModalState();
  return (
    <div>
      <InputGroup.Button onClick={open}>
        <Icon icon="attachment" />
      </InputGroup.Button>
      <Modal show={isOpen} onHide={close}>
        <Modal.Header>
          <Modal.Title>Upload Files</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button>Send to chat</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AttachmentBtnModal;
