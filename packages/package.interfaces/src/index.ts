export interface IJWTPair {
    access: string
    refresh: string
}

export interface IAccessToken {
    uid: string
    login: string
    role: string
}

export interface IRefreshToken {
    uid: string
    login: string
    role: string
}

export interface IUserPayload {
    uid: string
    login: string 
    email: string
    password: string
}