import { ElementAventuraModel } from "./elementAventura.model";

export class AventuraModel {
    id? : number;
    titulo? : ElementAventuraModel;
    headerImage? : ElementAventuraModel;
    publicado? : boolean;
    user_id? : number;
    fecha_creacion? : Date;

    constructor( id? : number, publicado? : boolean, user_id? : number, fecha_creacion? : Date, property? : ElementAventuraModel, headerImage? : ElementAventuraModel){
        this.id = id;
        this.publicado = publicado;
        this.user_id = user_id;
        this.fecha_creacion = fecha_creacion;
    }
}