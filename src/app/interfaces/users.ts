import { UserPermits } from './user-permits';

export interface Users {
    id: string,
    isBussines: boolean,
    email: string,
    password: string,
    name: string,
    lastName?: string,
    RNCOrIdCard: string,
    imgProfile?: string,
    totalTimesLogged: number,
    isLoged: boolean,
    userPermits: UserPermits,
}