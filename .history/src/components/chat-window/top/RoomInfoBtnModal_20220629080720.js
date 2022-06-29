import React from 'react';
import { Button } from 'rsuite';
import { useCurrentRoom } from '../../../context/current-room.context';

const RoomInfoBtnModal = () => {
  const description = useCurrentRoom(v => v.description);
  const name = useCurrentRoom(v => v.name);

  return (
    <div>
      <Button>Room Information</Button>
    </div>
  );
};

export default RoomInfoBtnModal;
