import { Publicacao } from "./Publicacao";
import { Localizavel } from "./Localizavel";
import * as readline from "readline-sync";
import { questionInt } from "../../utils/questionInt";

export class Livro extends Publicacao implements Localizavel {
  public isbn: string;

  constructor(
    titulo: string,
    ano: number,
    autor: string,
    editora: string,
    public localizacao: string,
    isbn: string
  ) {
    super(titulo, ano, autor, editora);
    this.isbn = isbn;
  }

  descricao(): string {
    return `${super.descricao()} | Localização: ${this.localizacao} | ISBN: ${this.isbn
      }`;
  }

  editar() {
    // Pergunta por todas as propriedades do Livro
    const titulo = readline.question(`Título do Livro [${this.titulo}]: `);
    const ano = questionInt(`Ano de Publicação [${this.ano}]: `);
    const editora = readline.question(`Editora [${this.editora}]: `);
    const autor = readline.question(`Autor [${this.autor}]: `);
    const isbn = readline.question(`ISBN [${this.isbn}]: `);
    const localizacao = readline.question(
      `Localização do Livro [${this.localizacao}]: `
    );

    // Atualiza as propriedades do Livro com as novas informações, se houver
    this.titulo = titulo || this.titulo;
    this.ano = ano || this.ano;
    this.editora = editora || this.editora;
    this.autor = autor || this.autor;
    this.isbn = isbn || this.isbn;
    this.localizacao = localizacao || this.localizacao;

    console.log(`Livro "${this.titulo}" foi editado.`);
  }
}
