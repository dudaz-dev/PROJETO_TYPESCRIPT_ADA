import { Midia } from './Midia';

export class CD extends Midia {
    constructor(
        titulo: string,
        ano: number,
        duracao: number,
        public artista: string
    ) {
        super(titulo, ano, duracao);
    }

    descricao(): string {
        return `CD: ${super.descricao()} Artista: ${this.artista}`;
    }
}
