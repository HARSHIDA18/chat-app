import React, { useState } from 'react';
import { useParams } from 'react-router';
import { database } from '../../../misc/firebase';
import { transformToArrWithId } from '../../../misc/helpers';

const Messages = () => {
  const { chatId } = useParams();
  const [messages, setMessages] = useState(null);
  useEffect(() => {
    const messagesRef = database.ref('/messages');
    messagesRef
      .orderByChild('roomId')
      .equalTo(chatId)
      .on('value', snap => {
        const data = transformToArrWithId(snap.val());
        setMessages(data);
      });
  }, [chatId]);
  return <div>Messages</div>;
};

export default Messages;
