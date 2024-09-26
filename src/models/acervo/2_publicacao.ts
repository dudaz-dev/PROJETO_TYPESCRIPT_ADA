import { itemAcervo } from "./1_itemAcervo";

export abstract class Publicacao extends itemAcervo {
  protected editora: string;

  constructor(titulo: string, autor: string, editora: string, estante: string, prateleira: string) {
    super(titulo, autor, estante, prateleira);
    this.editora = editora;
  }

  abstract obterDetalhes(): string;
}
