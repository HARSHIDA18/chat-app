import React from 'react';
import { Modal } from 'rsuite';

const fileInputTypes = '.png, .jpeg, .jpg';

const AvatarUploadBtn = () => {
  return (
    <div className="mt-3 text-center">
      <div>
        <label
          htmlFor="avatar-upload"
          className="d-block cursor-pointer padded"
        >
          Select new avatar
          <input
            id="avatar-upload"
            type="file"
            className="d-none"
            accept={fileInputTypes}
          />
        </label>
        <Modal show={} onHide>
            <Modal.Header></Modal.Header>   
            <Modal.Body></Modal.Body>
            <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default AvatarUploadBtn;
