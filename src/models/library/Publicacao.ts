import { ItemAcervo } from "./ItemAcervo";

export abstract class Publicacao extends ItemAcervo {
  constructor(
    titulo: string,
    ano: number,
    public autor: string,
    public editora: string
  ) {
    super(titulo, ano);
  }

  descricao(): string {
    return `${this.titulo}, por ${this.autor}, publicado por ${this.editora} em ${this.ano}.`;
  }
}
