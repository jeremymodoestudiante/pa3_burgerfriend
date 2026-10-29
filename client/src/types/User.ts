export interface UserSignUp {
    username: string;
    password: string;
    email: string;
    role: string;
}

export interface UserLogIn {
    email: string;
    password: string;
}

export interface UserUpdate {
    _id: string;
    username: string;
    password: string;
    email: string;
    role: string;
    estado: boolean;
}