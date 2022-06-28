import React, { useState } from 'react';
import {
  Button,
  Icon,
  Modal,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Schema,
} from 'rsuite';
import { useModalState } from '../misc/custom-hooks';

const { StringType } = Schema.Types;
const model = Schema.Model({
  name: StringType().isRequired('Chat name is required'),
  description: StringType().isRequired('Description is required'),
});
const INITIAL_FORM = {
  name: '',
  description: '',
};
const CreateRoomBtnModal = () => {
  const { isOpen, open, close } = useModalState();
  const [formValue, setFormValue] = useState(INITIAL_FORM);
  const [isLoading, setIsLoading] = useState(false);

  const onFormChange = value => {
    setFormValue(value);
  };
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
          <Form fluid onChange={onFormChange} formValue={formValue}>
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
