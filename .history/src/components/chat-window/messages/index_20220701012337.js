/* eslint-disable arrow-body-style */
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Alert } from 'rsuite';
import { database } from '../../../misc/firebase';
import { transformToArrWithId } from '../../../misc/helpers';
import MessageItem from './MessageItem';

const Messages = () => {
  const { chatId } = useParams();

  const [messages, setMessages] = useState(null);

  const isChatEmpty = messages && messages.length === 0;
  const canShowMessages = messages && messages.length > 0;

  useEffect(() => {
    const messageRef = database.ref('/messages');

    messageRef
      .orderByChild('roomId')
      .equalTo(chatId)
      .on('value', snap => {
        const data = transformToArrWithId(snap.val());

        setMessages(data);
      });

    return () => {
      messageRef.off('value');
    };
  }, [chatId]);

  const handleAdmin = useCallback(
    async uid => {
      const adminsRef = database.ref(`/rooms/${chatId}/admins`);

      let alertMsg;

      await adminsRef.transaction(admins => {
        if (admins) {
          if (admins[uid]) {
            // eslint-disable-next-line no-param-reassign
            admins[uid] = null;
            alertMsg = 'Admin Permission Removed';
          } else {
            // eslint-disable-next-line no-param-reassign
            admins[uid] = true;
            alertMsg = 'Admin Permission Granted';
          }
        }
        return admins;
      });

      Alert.info(alertMsg, 4000);
    },
    [chatId]
  );

  const handleLike = useCallback(async msgId => {
    const messageRef = database.ref(`/rmessages/${messageId}/admins`);

    let alertMsg;

    await messageRef.transaction(admins => {
      if (admins) {
        if (admins[uid]) {
          // eslint-disable-next-line no-param-reassign
          admins[uid] = null;
          alertMsg = 'Admin Permission Removed';
        } else {
          // eslint-disable-next-line no-param-reassign
          admins[uid] = true;
          alertMsg = 'Admin Permission Granted';
        }
      }
      return admins;
    });

    Alert.info(alertMsg, 4000);
  }, []);

  return (
    <ul className="msg-list  custom-scroll ">
      {isChatEmpty && <li>No Messages yet...</li>}

      {canShowMessages &&
        messages.map(msg => (
          <MessageItem
            key={msg.id}
            message={msg}
            handleAdmin={handleAdmin}
            handleLike={handleLike}
          />
        ))}
    </ul>
  );
};

export default Messages;
