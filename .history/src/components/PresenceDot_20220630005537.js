import React from 'react';
import { Whisper, Badge, Tooltip } from 'rsuite';
import { usePresence } from '../misc/custom-hooks';

const PresenceDot = ({ uid }) => {
  const presence = usePresence(uid);

  return (
    <Whisper placement="top" trigger="hover" speaker={<Tooltip>hello</Tooltip>}>
      <Badge />
    </Whisper>
  );
};

export default PresenceDot;
