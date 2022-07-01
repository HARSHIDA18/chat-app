import React from 'react';
import { InputGroup, Icon } from 'rsuite';
import { useModalState } from '../../../misc/custom-hooks';

const AttachmentBtnModal = () => {
  const { isOpen, close, open } = useModalState();
  return (
    <div>
      <InputGroup.Button>
        <Icon icon="attachment" />
      </InputGroup.Button>
    </div>
  );
};

export default AttachmentBtnModal;
