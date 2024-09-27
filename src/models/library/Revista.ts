import { Publicacao } from "./Publicacao";
import { Localizavel } from "./Localizavel";

export class Revista extends Publicacao implements Localizavel {
  constructor(
    titulo: string,
    ano: number,
    autor: string,
    editora: string,
    public edicao: number,
    public localizacao: string
  ) {
    super(titulo, ano, autor, editora);
  }

  descricao(): string {
    return `Revista: ${super.descricao()} Edição: ${this.edicao} Localização: ${
      this.localizacao
    }`;
  }

  editar(): void {
    throw new Error("Method not implemented.");
  }
}
