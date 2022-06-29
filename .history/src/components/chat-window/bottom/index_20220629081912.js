import React from 'react';
import { InputGroup, Input, Icon } from 'rsuite';

const Bottom = () => {
  return (
    <div>
      <InputGroup>
        <Input placeholder="Write a new message here..." />
      </InputGroup>
      <InputGroup.Button color="blue" appearance="primary">
        <Icon icon="send" />
      </InputGroup.Button>
    </div>
  );
};

export default Bottom;
