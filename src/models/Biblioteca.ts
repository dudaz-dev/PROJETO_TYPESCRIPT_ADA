import { itemAcervo } from "./acervo/1_itemAcervo";
import { Logger } from "../utils/logger";
//import { StatusItem } from "../types/statusItem"; para validação mais tarde

export class Biblioteca {
  private acervo: itemAcervo[] = [];

  registrarItem<T extends itemAcervo>(item: T): void {
    this.acervo.push(item);
    Logger.info(`Item registrado e adicionado ao acervo: ${item.obterDetalhes()}`);
  }

  // Função para ver a lista de todos os itens do nosso acervo
  listarAcervo(): void {
    console.log("Acervo da Biblioteca: ");
    this.acervo.forEach(item => {
      console.log(item.obterDetalhes());
    });
  }
}