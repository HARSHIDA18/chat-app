import React, { useCallback, useState } from 'react';
import { InputGroup, Input, Icon } from 'rsuite';

function assembleMessage(profile, chatId) {
  return {
    roonId: chatId,
    author: {},
  };
}
const Bottom = () => {
  const { input, setInput } = useState('');
  const onInputChange = useCallback(value => {
    setInput(value);
  }, []);

  const onSendClick = () => {
    if (input.trim() === '') {
      return;
    }
  };
  return (
    <div>
      <InputGroup>
        <Input
          placeholder="Write a new message here..."
          value={input}
          onChange={onInputChange}
        />
        <InputGroup.Button
          color="blue"
          appearance="primary"
          onClick={onSendClick}
        >
          <Icon icon="send" />
        </InputGroup.Button>
      </InputGroup>
    </div>
  );
};

export default Bottom;
