import * as readline from "readline-sync";

export function questionIgnoreEmpty(prompt: string) {
  let response = "";
  do {
    response = readline.question(prompt);
    if (response.trim() === "") {
      console.log("Por favor, insira uma resposta válida.");
    }
  } while (response.trim() === "");
  return response;
}
