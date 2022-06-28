import React from 'react';
import {
  Button,
  Icon,
  Modal,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
} from 'rsuite';
import { useModalState } from '../misc/custom-hooks';

const CreateRoomBtnModal = () => {
  const { isOpen, open, close } = useModalState();
  return (
    <div className="mt-2">
      <Button block color="green" onClick={open}>
        <Icon icon="creative" />
        Create new chat room
      </Button>
      <Modal show={isOpen} onHide={close}>
        <Modal.Header>
          <Modal.Title>New chat room</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form fluid>
            <FormGroup>
              <ControlLabel>Room Name</ControlLabel>
              <FormControl name="name" placeholder="Enter chat room name..." />
            </FormGroup>

            <FormGroup>
              <ControlLabel>Description</ControlLabel>
              <FormControl
                componentClass="textarea"
                row={5}
                name="description"
                placeholder="Enter room description..."
              />
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button block appearance="primary">
            Create new chat room
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreateRoomBtnModal;
