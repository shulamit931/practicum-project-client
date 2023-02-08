import { ChildModel } from "./Child";
import { UserModel } from "./User";

export class FormModel{
    constructor(public User:UserModel,public Children:ChildModel[]){}
}