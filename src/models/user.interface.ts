export interface user{
    username: string;
    password: string
    type: number
}

export interface userWithId{
    id: number;
    username: string;
    password: string,
    refreshToken: string;
    accessToken: string
}

export interface userWithRefresh{
    username: string;
    refreshToken: string;
}