import * as readline from "readline-sync";
import { BibliotecaService } from "./services/BibliotecaService";
import { Livro } from "./models/library/Livro";
import { CD } from "./models/library/CD";
import { DVD } from "./models/library/DVD";
import { Revista } from "./models/library/Revista";
import { questionIgnoreEmpty } from "./utils/questionIgonoreEmpty";

const biblioteca = new BibliotecaService();

function menu() {
  console.log(`
        1 - Adicionar Livro
        2 - Adicionar CD
        3 - Adicionar DVD
        4 - Adicionar Revista
        5 - Editar Item
        6 - Remover Item
        7 - Listar Acervo
        8 - Atualizar Disponibilidade
        0 - Sair
    `);
}

let opcao: number;

do {
  menu();
  opcao = readline.questionInt("Escolha uma opção: ");

  switch (opcao) {
    case 1:
      const tituloLivro = questionIgnoreEmpty("Título do Livro: ");
      const anoLivro = readline.questionInt("Ano de Publicação: ");
      const autor = questionIgnoreEmpty("Autor: ");
      const editora = questionIgnoreEmpty("Editora: ");
      const localizacaoLivro = questionIgnoreEmpty("Localização do Livro: ");
      const isbn = questionIgnoreEmpty("ISBN: ");
      const livro = new Livro(
        tituloLivro,
        anoLivro,
        autor,
        editora,
        localizacaoLivro,
        isbn
      );
      biblioteca.adicionarItem(livro);
      break;
    case 2:
      const tituloCD = questionIgnoreEmpty("Título do CD: ");
      const anoCD = readline.questionInt("Ano de Publicação: ");
      const artista = questionIgnoreEmpty("Artista: ");
      const duracaoCD = readline.questionInt("Duração (minutos): ");
      const localizacaoCD = questionIgnoreEmpty("Localização do CD: ");
      const cd = new CD(tituloCD, anoCD, duracaoCD, artista, localizacaoCD);
      biblioteca.adicionarItem(cd);
      break;
    case 3:
      const tituloDVD = questionIgnoreEmpty("Título do DVD: ");
      const anoDVD = readline.questionInt("Ano de Publicação: ");
      const diretor = questionIgnoreEmpty("Diretor: ");
      const duracaoDVD = readline.questionInt("Duração (minutos): ");
      const localizacaoDVD = questionIgnoreEmpty("Localização do DVD: ");
      const dvd = new DVD(
        tituloDVD,
        anoDVD,
        duracaoDVD,
        diretor,
        localizacaoDVD
      );
      biblioteca.adicionarItem(dvd);
      break;
    case 4:
      const tituloRevista = questionIgnoreEmpty("Título da Revista: ");
      const anoRevista = readline.questionInt("Ano de Publicação: ");
      const autorRevista = questionIgnoreEmpty("Autor: ");
      const editoraRevista = questionIgnoreEmpty("Editora: ");
      const edicaoRevista = readline.questionInt("Edição da Revista: ");
      const localizacaoRevista = questionIgnoreEmpty(
        "Localização da Revista: "
      );
      const revista = new Revista(
        tituloRevista,
        anoRevista,
        autorRevista,
        editoraRevista,
        edicaoRevista,
        localizacaoRevista
      );
      biblioteca.adicionarItem(revista);
      break;
    case 5:
      const idItem = readline.questionInt("ID do Item a ser editado: ");
      const item = biblioteca.encontrarItem(idItem);
      if (item) {
        item.editar();
        item.descricao();
      } else {
        console.log(`Item com ID ${idItem} não encontrado.`);
        break;
      }
      break;
    case 6:
      const idRemover = readline.questionInt("ID do Item a ser removido: ");
      biblioteca.removerItem(idRemover);
      break;
    case 7:
      biblioteca.listarAcervo();
      break;
    case 8:
      const idAtualizar = readline.questionInt("ID do Item: ");
      let disponivelInput: string;
      do {
        disponivelInput = readline
          .question("Está disponível (sim/nao)? ")
          .toLowerCase();
        if (disponivelInput !== "sim" && disponivelInput !== "nao") {
          console.log('Entrada inválida. Digite "sim" ou "nao".');
        }
      } while (disponivelInput !== "sim" && disponivelInput !== "nao");

      const disponivel = disponivelInput === "sim";
      biblioteca.atualizarDisponibilidade(idAtualizar, disponivel);
      break;
    case 0:
      console.log("Saindo...");
      break;
    default:
      console.log("Opção inválida.");
  }
} while (opcao !== 0);
