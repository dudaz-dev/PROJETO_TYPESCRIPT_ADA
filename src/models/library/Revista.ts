import { Publicacao } from "./Publicacao";
import { Localizavel } from "./Localizavel";
import * as readline from "readline-sync";
import { questionInt } from "../../utils/questionInt";

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
    return `Revista: ${super.descricao()} Edição: ${this.edicao} Localização: ${this.localizacao
      }`;
  }

  editar() {
    // Pergunta por todas as propriedades da Revista
    const titulo = readline.question(`Título da Revista [${this.titulo}]: `);
    const ano = questionInt(`Ano de Publicação [${this.ano}]: `);
    const editora = readline.question(`Editora [${this.editora}]: `);
    const autor = readline.question(`Autor [${this.autor}]: `);
    const edicao = questionInt(`Edição [${this.edicao}]: `);
    const localizacao = readline.question(
      `Localização da Revista [${this.localizacao}]: `
    );

    // Atualiza as propriedades da Revista com as novas informações, se houver
    this.titulo = titulo || this.titulo;
    this.ano = ano || this.ano;
    this.editora = editora || this.editora;
    this.autor = autor || this.autor;
    this.edicao = edicao || this.edicao;
    this.localizacao = localizacao || this.localizacao;

    console.log(`Revista "${this.titulo}" foi editada.`);
  }
}
