import { IAuthInfo, ILogin } from "../models/IAuth";

// todo (hazel): create APIService

const Login = (login: ILogin): IAuthInfo => {
    return APIService.post('auth/login', login);
}

export { Login }
