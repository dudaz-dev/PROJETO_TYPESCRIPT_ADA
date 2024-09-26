import { ItemAcervo } from '../models/ItemAcervo';

export function registrarItem<T extends ItemAcervo>(item: T, acervo: T[]): void {
    acervo.push(item);
    console.log(`${item.titulo} foi adicionado ao acervo.`);
}
