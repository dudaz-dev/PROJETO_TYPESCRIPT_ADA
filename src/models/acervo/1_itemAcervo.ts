import { StatusItem } from "../../types/statusItem";
import { Localizar } from "../../types/localizarItem";


export abstract class itemAcervo implements Localizar {
  protected titulo: string;
  protected autor: string;
  protected status: StatusItem;
  public estante: string;
  public prateleira: string;

  constructor(titulo: string, autor: string, estante: string, prateleira: string) {
    this.titulo = titulo;
    this.autor = autor;
    this.status = StatusItem.DISPONIVEL;
    this.estante = estante;
    this.prateleira = prateleira;
  }

  abstract obterDetalhes(): string;

  obterLocalizacao(): string {
    return `Estante: ${this.estante}, Prateleira: ${this.prateleira}`;
  }

}
