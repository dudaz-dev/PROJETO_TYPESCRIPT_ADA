import { Publicacao } from './Publicacao';

export class Revista extends Publicacao {
    constructor(
        titulo: string,
        ano: number,
        autor: string,
        editora: string,
        public edicao: number
    ) {
        super(titulo, ano, autor, editora);
    }

    descricao(): string {
        return `Revista: ${super.descricao()} Edição: ${this.edicao}`;
    }
}
