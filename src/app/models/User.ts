
export class UserModel {
    constructor(public Tz?:string,public FirstName?:string,public LastName?:string,public BirthDate?:Date,public Kind?:Ekind,public HMO?:EHMO){}
}

export enum EHMO{
    Macaby ,Meuchedet,Leumit,Clalit
}

export enum Ekind{
    Male,Fmale
}