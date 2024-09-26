import { itemAcervo } from "./1_itemAcervo";

export abstract class Midia extends itemAcervo {
  protected duracaoEmMinutos: number;

  constructor(titulo: string, autor: string, duracaoEmMinutos: number, estante: string, prateleira: string) {
    super(titulo, autor, estante, prateleira);
    this.duracaoEmMinutos = duracaoEmMinutos;
  }

  abstract obterDetalhes(): string;
}
