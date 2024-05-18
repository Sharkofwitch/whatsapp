import { createContext, useContext, useReducer } from "react";


export const StateContext = createContext(null);

export const StateProvider = ({initialState,reducer,children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
            {children}
        </StateContext.Provider>
);

// following code is changed from default :)
export const useStateProvider = () => {
    const [state, dispatch] = useContext(StateContext);
    return [state, dispatch];
};