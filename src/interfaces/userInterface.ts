export type UserRoles = "ANONYMOUS" | "REGISTERED" | "ADMIN";

export interface IUser {
   username: string;
   firstname: string;
   lastname: string;
   email: string;
   role: UserRoles;
   // createdAt: Date;
}

export class UserClass {
   constructor(
      private username: string,
      private firstname: string,
      private lastname: string,
      private email: string,
      private role: "ANONYMOUS" | "REGISTERED" | "ADMIN"
   ) {}
}
