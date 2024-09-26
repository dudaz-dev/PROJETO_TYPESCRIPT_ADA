import { Publicacao } from './Publicacao';
import { Localizavel } from './Localizavel';

export class Livro extends Publicacao implements Localizavel {
    constructor(
        titulo: string,
        ano: number,
        autor: string,
        editora: string,
        public localizacao: string
    ) {
        super(titulo, ano, autor, editora);
    }

    descricao(): string {
        return `Livro: ${super.descricao()} Localização: ${this.localizacao}`;
    }
}
