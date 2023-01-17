import React, { createContext, PropsWithChildren, useState } from 'react';

interface AirdromeQuestion{
    id: number;
    name: string;
    icao: string;
    ans_x: number;
    ans_y: number;
}
interface Props{
    children?: React.ReactNode | undefined;
}
export const AirdromeQuestionsContext = createContext<AirdromeQuestion>({} as AirdromeQuestion);
export const AirdromeQuestionsProvider: React.FC<Props> = ({children}) => {
        
    return (
        <AirdromeQuestionsContext.Provider value={{
            id: 1,
            name: 'João 23',
            icao: 'SIRK',
            ans_x: 380.35,
            ans_y: 712.50
        }}>
            {children}
        </AirdromeQuestionsContext.Provider>
    )
}
