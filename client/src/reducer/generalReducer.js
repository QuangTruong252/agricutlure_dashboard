export const generalReducer = (state,actions) => {
    const {type, payload} = actions;
    switch (type) {
        case "GENERALS_LOADED_SUCCESS":
            return {
                ...state,
                generals: payload.generals,
                averages: payload.averages,
                isLoading: false
            }
        default:
            return state;
    };
    
};