import { RoleEnum } from 'constants/RoleType';

enum AuthActionTypes {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
    SET_AUTH_INFO = 'SET_AUTH_INFO',
    RESET_AUTH = 'RESET_AUTH'
}

interface IAuthState {
    authInfo: IAuthInfo | null;
}

interface IAuthActions {
    type: AuthActionTypes;
    payload?: {
        login?: ILogin;
        authInfo?: IAuthInfo;
    }
}

interface ILogin {
    phoneNumber: string;
    password: string;
}

interface IAuthInfo {
    userId: number;
    name: string;
    surname: string;
    phoneNumber: string;
    password: string;
    token: string;
    role: RoleEnum;
}

export { AuthActionTypes, IAuthInfo, ILogin, IAuthActions, IAuthState }
