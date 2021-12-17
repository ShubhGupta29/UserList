export class LoginRegisterRequest{
    email: string;
    password: string;
}

export class LoginResponse{
    token: string;
}

export class RegisterResponse{
    id: number;
    token: string;
}
export class loginError{
 error: string;
}