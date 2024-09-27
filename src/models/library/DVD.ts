import { Midia } from './Midia';
import { Localizavel } from './Localizavel';

export class DVD extends Midia implements Localizavel{
    constructor(
        titulo: string,
        ano: number,
        duracao: number,
        public diretor: string,
        public localizacao: string
    ) {
        super(titulo, ano, duracao);
    }

    descricao(): string {
        return `DVD: ${super.descricao()} Diretor: ${this.diretor}`;
    }
}
