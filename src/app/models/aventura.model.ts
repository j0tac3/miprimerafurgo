export class AventuraModel {
    id? : number;
    publicado? : boolean;
    user_id? : number;
    fecha_creacion? : Date;

    constructor( id? : number, publicado? : boolean, user_id? : number, fecha_creacion? : Date){
        this.id = id;
        this.publicado = publicado;
        this.user_id = user_id;
        this.fecha_creacion = fecha_creacion;
    }
}