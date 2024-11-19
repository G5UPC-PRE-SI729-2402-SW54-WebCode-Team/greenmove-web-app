export enum Role {
  Owner = 'ROLE_OWNER',
  User = 'ROLE_TENANT',
}

export interface IUser {
  id: string;
  token: string;
  username: string;
  role: 'ROLE_OWNER' | 'ROLE_TENANT';
  idRole: any;
}
