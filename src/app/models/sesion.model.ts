import { UserModel } from "./user.model";

export class Session {
    public token? : string;
    public user? : UserModel;
}