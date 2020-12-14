import { Users } from "./users";

export interface Session {
    token: string,
    user: Users
}