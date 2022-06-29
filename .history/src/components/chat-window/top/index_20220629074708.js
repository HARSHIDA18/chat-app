import React, { memo } from 'react';
import { useCurrentRoom } from '../../../context/current-room.context';

const Top = () => {
  const name = useCurrentRoom(v => v.name);
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h4>
          <span className="text-disappear">{name}</span>
        </h4>
      </div>
    </div>
  );
};

export default memo(Top);
