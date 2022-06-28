import React, { createContext, useEffect, useState } from "react";
import { database } from "../misc/firebase";



const RoomsContext=createContext();

export const RoomsProvider({children})=>{
    const [rooms,setRooms]=useState();
    useEffect(()=>{
        const roomListRef=database.ref('rooms');

        roomListRef.on('value',(snap)=>{
            console.log('snap.val()',snap.val());
        })
        return ()=>{
            roomListRef.off();
        };
    },[]);
    return <RoomsContext.Provider value="hello">{children}</RoomsContext.Provider>
}