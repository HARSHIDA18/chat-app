import React from 'react';
import ChatTop from '../../components/chat-window/top';
import ChatTop from '../../components/chat-window/bottom';
import ChatTop from '../../components/chat-window/middle';

const Chat = () => {
  return (
    <div>
      <div className="chat-top">
        <ChatTop />
      </div>
      <div className="chat-middle">
        <Messages />
      </div>
      <div className="class-bottom">
        <ChatBottom />
      </div>
    </div>
  );
};

export default Chat;
