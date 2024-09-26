export interface Localizar {
  estante: string;
  prateleira: string;
  obterLocalizacao(): string;
}