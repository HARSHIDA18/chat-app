import React, { useState } from 'react';
import { InputGroup, Icon, Modal, Button, Uploader } from 'rsuite';
import { useModalState } from '../../../misc/custom-hooks';

const MAX_FILE_SIZE = 1000 * 1024 * 5;

const AttachmentBtnModal = () => {
  const { isOpen, close, open } = useModalState();

  const [fileList, setFileList] = useState([]);
  const onChange = fileArr => {
    const filtered = fileArr
      .filter(el => el.blobFile.size <= MAX_FILE_SIZE)
      .slice(0, 5);
    setFileList(filtered);
  };
  return (
    <>
      <InputGroup.Button onClick={open}>
        <Icon icon="attachment" />
      </InputGroup.Button>
      <Modal show={isOpen} onHide={close}>
        <Modal.Header>
          <Modal.Title>Upload Files</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Uploader
            autoUpload={false}
            action=""
            fileList={fileList}
            onChange={onChange}
            multiple
            listType="picture-text"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button block>Send to chat</Button>
          <div className="text-right mt-2">
            <small>* only files less than 5mb are allowed</small>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AttachmentBtnModal;
