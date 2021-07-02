import { ElementAventuraModel } from "./elementAventura.model";
import { UserModel } from "./user.model";

export class AventuraModel {
    id? : number;
    titulo? : ElementAventuraModel;
    headerImage? : ElementAventuraModel;
    resumen? : ElementAventuraModel;
    publicado? : boolean;
    user_id? : number;
    fecha_creacion? : Date;
    creado_hace? : string;
    views? : number;
    elementos? : ElementAventuraModel[];
    user? : UserModel;

    constructor( ){
        this.publicado = false;
    }
}