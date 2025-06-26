export interface IUser {
    id: number;
    email: string;
    password: string;
} 

export enum UserPermission {
    CREATE = 'create-user',
    READ = 'read-user',
    UPDATE = 'update-user',
    DELETE = 'delete-user'
}

