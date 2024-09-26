import { itemAcervo } from "./acervo/1_itemAcervo";
import { Logger } from "../utils/logger";

export class Biblioteca {
  private acervo: itemAcervo[] = [];

  // Função para registrar qualquer tipo de item no nosso acervo
  registrarItem<T extends itemAcervo>(item: T): void {
    this.acervo.push(item);
    Logger.info(`Item registrado: ${item.obterDetalhes()}`);
  }
};