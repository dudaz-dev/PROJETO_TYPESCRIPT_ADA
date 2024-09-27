import { Publicacao } from './Publicacao';
import { Localizavel } from './Localizavel';

export class Livro extends Publicacao implements Localizavel {
    public isbn: string; 

    constructor(
        titulo: string,
        ano: number,
        autor: string,
        editora: string,
        public localizacao: string,
        isbn: string 
    ) {
        super(titulo, ano, autor, editora);
        this.isbn = isbn;
    }

    descricao(): string {
        return `${super.descricao()} | Localização: ${this.localizacao} | ISBN: ${this.isbn}`;
    }
}
