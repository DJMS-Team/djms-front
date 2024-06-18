'use client'

import { useMountedState } from "react-use"
import { EditUserSheet } from "./user/edit-user-sheet"

export const SheetProvider = () => {
    const isMounted = useMountedState()
    console.log('SheetProvider')
    
    //if (!isMounted()) return null
    return (
        <>
            <EditUserSheet/>
            
        </>
    )
}