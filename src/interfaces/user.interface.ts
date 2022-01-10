export type UserRoles = "ANONYMOUS" | "REGISTERED" | "ADMIN";

export interface IUser {
   username: string;
   password: string;
   _id: string;
   // firstname: string;
   // lastname: string;
   // email: string;
   // role: UserRoles;
   // createdAt: Date;
}
