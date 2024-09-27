import { Publicacao } from "./2_publicacao";

export class Livro extends Publicacao {
  private ISBN: string;

  constructor(titulo: string, autor: string, editora: string, ISBN: string, estante: string, prateleira: string) {
    super(titulo, autor, editora, estante, prateleira);
    this.ISBN = ISBN;
  }

  obterDetalhes(): string {
    return `    Livro: ${this.titulo} 
    Escritor: ${this.autor}, 
    Editora: ${this.editora},                
    ISBN: ${this.ISBN},                      
    Localização: ${this.obterLocalizacao()}, 
    Status: ${this.status}
    -------------------------------------------------------------`;
  }
}
