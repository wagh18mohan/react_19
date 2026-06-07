
import { useReducer } from "react";
import { initialState, UserDataContext,reducer } from "./common";

export function ProviderComponent({children}){

    const [state, dispatcher] = useReducer(reducer,initialState);

    return(

        <>
         <UserDataContext value={{state, dispatcher}}>
            
        {children}  //component1,comp1,com3.

        </UserDataContext>
        </>
    )
}