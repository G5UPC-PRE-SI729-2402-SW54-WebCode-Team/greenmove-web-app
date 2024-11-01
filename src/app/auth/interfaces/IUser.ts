export enum Role {
  Owner = 'OWNER',
  User = 'USER',
}

export interface IUser {
  id: string;
  jwtToken: string;
  name: string;
  role: 'OWNER' | 'USER';
}
