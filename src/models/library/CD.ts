import { Midia } from "./Midia";
import { Localizavel } from "./Localizavel";
import * as readline from "readline-sync";
import { questionInt } from "../../utils/questionInt";


export class CD extends Midia implements Localizavel {
  constructor(
    titulo: string,
    ano: number,
    duracao: number,
    public artista: string,
    public localizacao: string
  ) {
    super(titulo, ano, duracao);
  }

  descricao(): string {
    return `CD: ${super.descricao()} Artista: ${this.artista} Localização: ${
      this.localizacao
    }`;
  }

  editar() {
    // Pergunta por todas as propriedades do CD
    const titulo = readline.question(`Título do CD [${this.titulo}]: `);
    const ano = questionInt(`Ano de Publicação [${this.ano}]: `);
    const artista = readline.question(`Artista [${this.artista}]: `);
    const duracao = questionInt(`Duração (minutos) [${this.duracao}]: `);
    const localizacao = readline.question(
      `Localização do CD [${this.localizacao}]: `
    );

    // Atualiza as propriedades do CD com as novas informações, se houver
    this.titulo = titulo || this.titulo;
    this.ano = ano || this.ano;
    this.artista = artista || this.artista;
    this.duracao = duracao || this.duracao;
    this.localizacao = localizacao || this.localizacao;

    console.log(`CD "${this.titulo}" foi editado.`);
  }
}
