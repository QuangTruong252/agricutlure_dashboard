export const authReducer = (state, actions) => {
    const {type, payload: {isAuthenticated, user}} = actions;
    switch (type) {
        case 'SET_AUTH':
            return {
                ...state,
                authLoading: false,
                isAuthenticated,
                user
            };
        default: 
            return state;
    }
}
