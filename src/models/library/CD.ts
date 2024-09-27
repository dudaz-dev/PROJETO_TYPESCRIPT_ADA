import { Midia } from "./Midia";
import { Localizavel } from "./Localizavel";

export class CD extends Midia implements Localizavel {
  constructor(
    titulo: string,
    ano: number,
    duracao: number,
    public artista: string,
    public localizacao: string
  ) {
    super(titulo, ano, duracao);
  }

  descricao(): string {
    return `CD: ${super.descricao()} Artista: ${this.artista} Localização: ${
      this.localizacao
    }`;
  }

  editar(): void {
    throw new Error("Method not implemented.");
  }
}
