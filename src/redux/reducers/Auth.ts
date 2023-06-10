import {IAuthState, IAuthActions, AuthActionTypes} from '../models/IAuth';

const initialState: IAuthState = {
    authInfo: null,
};

export default function Auth(state: IAuthState, action: IAuthActions) : IAuthState {
    const { SET_AUTH_INFO, RESET_AUTH, LOGOUT } = AuthActionTypes;
    switch (action.type) {
        case SET_AUTH_INFO:
            return {
                ...state,
                authInfo: action.payload?.authInfo ?? initialState.authInfo,
            }
        case LOGOUT:
            return {
                ...initialState,
            }
        case RESET_AUTH:
            return {
                ...initialState,
            }
        default:
            return state;
    }
}
