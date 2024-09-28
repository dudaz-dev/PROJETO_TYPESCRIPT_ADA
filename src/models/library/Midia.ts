import { ItemAcervo } from "./ItemAcervo";

export abstract class Midia extends ItemAcervo {
  constructor(titulo: string, ano: number, public duracao: number) {
    super(titulo, ano);
  }

  descricao(): string {
    return `${this.titulo}, duração de ${this.duracao} minutos, lançado em ${this.ano}.`;
  }
}
