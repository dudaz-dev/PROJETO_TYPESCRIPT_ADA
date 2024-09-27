import * as readline from "readline-sync";

export function questionInt(message: string): number | null {
  let value: string;
  do {
    value = readline.question(message);

    if (!value) return null;

    if (isNaN(Number(value))) console.log("Por favor, digite um número");
  } while (isNaN(Number(value)));

  return Number(value);
}
