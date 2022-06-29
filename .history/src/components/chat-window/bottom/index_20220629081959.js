import React from 'react';
import { InputGroup, Input, Icon } from 'rsuite';

const Bottom = () => {
  return (
    <div>
      <InputGroup>
        <Input placeholder="Write a new message here..." />
        <InputGroup.Button color="blue" appearance="primary">
          <Icon icon="send" />
        </InputGroup.Button>
      </InputGroup>
    </div>
  );
};

export default Bottom;
