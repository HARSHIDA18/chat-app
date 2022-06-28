import { createContext } from "react";



const RoomsContext=createContext();

export const RoomsProvider({children})=>{
    return <RoomsContext.Provider value>{children}</RoomsContext.Provider>
}