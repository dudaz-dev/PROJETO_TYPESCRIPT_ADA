import { ItemAcervo } from '../models/library/ItemAcervo';

export class BibliotecaService {
    private acervo: ItemAcervo[] = [];

    adicionarItem(item: ItemAcervo): void {
        this.acervo.push(item);
        console.log(`${item.titulo} foi adicionado ao acervo com ID ${item.id}.`);
    }

    removerItem(id: number): void {
        const item = this.acervo.find(item => item.id === id);
        if (!item) {
            console.log(`Item com ID ${id} não encontrado.`);
            return;
        }
        if (!item.disponivel) {
            console.log(`O item "${item.titulo}" está emprestado e não pode ser removido.`);
            return;
        }
        this.acervo = this.acervo.filter(item => item.id !== id);
        console.log(`O item "${item.titulo}" foi removido do acervo.`);
    }

    listarAcervo(): void {
        this.acervo.forEach(item => {
            const status = item.disponivel ? 'Disponível' : 'Emprestado';
            console.log(`ID: ${item.id} | ${item.descricao()} | Status: ${status}`);
        });
    }

    atualizarDisponibilidade(id: number, disponivel: boolean): void {
        const item = this.acervo.find(item => item.id === id);
        if (item) {
            item.disponivel = disponivel;
            console.log(`${item.titulo} está agora ${disponivel ? 'disponível' : 'emprestado'}.`);
        } else {
            console.log(`Item com ID ${id} não encontrado.`);
        }
    }
}
