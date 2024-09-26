import { Midia } from './Midia';

export class DVD extends Midia {
    constructor(
        titulo: string,
        ano: number,
        duracao: number,
        public diretor: string
    ) {
        super(titulo, ano, duracao);
    }

    descricao(): string {
        return `DVD: ${super.descricao()} Diretor: ${this.diretor}`;
    }
}
