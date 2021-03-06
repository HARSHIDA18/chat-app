import React from 'react';
import TimeAgo from 'timeago-react';

const RoomItems = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="text-disappear">Room name</h3>
        <TimeAgo dateTime={new Date()} />
      </div>
      <div className="d-flex align-items-center text-black-70">
        <span>No messages yet ...</span>
      </div>
    </div>
  );
};

export default RoomItems;
