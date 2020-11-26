export interface Pet{
    id?:number,
    Nome: string,
    Apelido:string,
    Raca:string,
    Especie:string,
    Dono:number
}

export interface Raca{
    id?:number,
    Nome:string
}

export interface Especie{
    id?:number,
    Nome:string
}
