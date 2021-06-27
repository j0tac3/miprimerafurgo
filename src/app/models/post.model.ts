export class Aventura {
    id? : number;
    user_id? : number;
    fecha_creacion? : Date;

    constructor( id? : number, user_id? : number, fecha_creacion? : Date){
        this.id = id;
        this.user_id = user_id;
        this.fecha_creacion = fecha_creacion;
    }
}