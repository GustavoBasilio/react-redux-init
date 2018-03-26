export const exempleReducer = (state = {}, action) => {

    /**
     * Treating the actions of this reducer 
     * and how it changes the state of the store
    **/
    switch (action.type) {

    case "EXEMPLE_ACTION":
        state = {state, "name": action.payload.name};
        break;

    }

    return state;

};