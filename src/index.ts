import * as readline from 'readline-sync';
import { BibliotecaService } from './services/BibliotecaService';
import { Livro } from './models/Livro';
import { CD } from './models/CD';
import { DVD } from './models/DVD';

const biblioteca = new BibliotecaService();

function menu() {
    console.log(`
        1 - Adicionar Livro
        2 - Adicionar CD
        3 - Adicionar DVD
        4 - Remover Item
        5 - Listar Acervo
        6 - Atualizar Disponibilidade
        0 - Sair
    `)
}

let opcao: number;

do {
    menu();
    opcao = readline.questionInt('Escolha uma opção: ');

    switch(opcao) {
        case 1:
            const tituloLivro = readline.question('Título do Livro: ');
            const anoLivro = readline.questionInt('Ano de Publicação: ');
            const autor = readline.question('Autor: ');
            const editora = readline.question('Editora: ');
            const localizacao = readline.question('Localização: ');

            const livro = new Livro(tituloLivro, anoLivro, autor, editora, localizacao);
            biblioteca.adicionarItem(livro);
            break;
        case 2:
            const tituloCD = readline.question('Título do CD: ');
            const anoCD = readline.questionInt('Ano de Lançamento: ');
            const duracaoCD = readline.questionInt('Duração (minutos): ');
            const artista = readline.question('Artista: ');

            const cd = new CD(tituloCD, anoCD, duracaoCD, artista);
            biblioteca.adicionarItem(cd);
            break;
        case 3:
            const tituloDVD = readline.question('Título do DVD: ');
            const anoDVD = readline.questionInt('Ano de Lançamento: ');
            const duracaoDVD = readline.questionInt('Duração (minutos): ');
            const diretor = readline.question('Diretor: ');

            const dvd = new DVD(tituloDVD, anoDVD, duracaoDVD, diretor);
            biblioteca.adicionarItem(dvd);
            break;
        case 4:
            const idRemover = readline.questionInt('ID do Item a ser removido: ');
            biblioteca.removerItem(idRemover);
            break;
        case 5:
            biblioteca.listarAcervo();
            break;
        case 6:
            const idAtualizar = readline.questionInt('ID do Item: ');
            let disponivelInput: string;
            do {
                disponivelInput = readline.question('Está disponível (sim/nao)? ').toLowerCase();
                if (disponivelInput !== 'sim' && disponivelInput !== 'nao') {
                    console.log('Entrada inválida. Digite "sim" ou "nao".');
                }
            } while (disponivelInput !== 'sim' && disponivelInput !== 'nao');
            
            const disponivel = disponivelInput === 'sim';
            biblioteca.atualizarDisponibilidade(idAtualizar, disponivel);
            break;
        case 0:
            console.log('Saindo...');
            break;
        default:
            console.log('Opção inválida.');
    }
} while (opcao !== 0);
