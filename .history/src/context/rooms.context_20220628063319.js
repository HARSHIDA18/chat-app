import React, { createContext, useEffect, useState } from 'react';
import { database } from '../misc/firebase';
import { transformToArrWithId } from '../misc/helpers';

const RoomsContext = createContext();

export const RoomsProvider = ({ children }) => {
  const [rooms, setRooms] = useState();
  useEffect(() => {
    const roomListRef = database.ref('rooms');

    roomListRef.on('value', snap => {
      const data = transformToArrWithId(snap.val());
      console.log(data);
    });
    return () => {
      roomListRef.off();
    };
  }, []);
  return (
    <RoomsContext.Provider value="hello">{children}</RoomsContext.Provider>
  );
};
