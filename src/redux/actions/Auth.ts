import { ILogin, IAuthActions, AuthActionTypes, IAuthInfo } from '../models/IAuth';

const { LOGOUT, RESET_AUTH, SET_AUTH_INFO, LOGIN } = AuthActionTypes;

const LoginAction = (login: ILogin) : IAuthActions => ({
    type: LOGIN,
    payload: { login },
});

const LogoutAction = () : IAuthActions => ({
    type: LOGOUT,
});

const SetAuthInfoAction = (authInfo: IAuthInfo) : IAuthActions => ({
    type: SET_AUTH_INFO,
    payload: { authInfo },
});

const ResetAuthAction = () => ({
   type: RESET_AUTH,
});

export { LoginAction, LogoutAction, SetAuthInfoAction, ResetAuthAction };
