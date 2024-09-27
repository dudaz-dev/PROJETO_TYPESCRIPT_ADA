import { Midia } from "./Midia";
import { Localizavel } from "./Localizavel";
import * as readline from "readline-sync";
import { questionInt } from "../../utils/questionInt";

export class DVD extends Midia implements Localizavel {
  constructor(
    titulo: string,
    ano: number,
    duracao: number,
    public diretor: string,
    public localizacao: string
  ) {
    super(titulo, ano, duracao);
  }

  descricao(): string {
    return `DVD: ${super.descricao()} Diretor: ${this.diretor}`;
  }

  editar() {
    // Pergunta por todas as propriedades do DVD
    const titulo = readline.question(`Título do DVD [${this.titulo}]: `);
    const ano = questionInt(`Ano de Publicação [${this.ano}]: `);
    const diretor = readline.question(`Diretor [${this.diretor}]: `);
    const duracao = questionInt(`Duração (minutos) [${this.duracao}]: `);
    const localizacao = readline.question(
      `Localização do DVD [${this.localizacao}]: `
    );

    // Atualiza as propriedades do DVD com as novas informações, se houver
    this.titulo = titulo || this.titulo;
    this.ano = ano || this.ano;
    this.diretor = diretor || this.diretor;
    this.duracao = duracao || this.duracao;
    this.localizacao = localizacao || this.localizacao;

    console.log(`DVD "${this.titulo}" foi editado.`);
  }
}
