import { Biblioteca } from "./models/Biblioteca";
import { Livro } from "./models/acervo/2.1_livro";
import { Logger, LogLevel } from "./utils/logger";

Logger.setLogLevel(LogLevel.DEBUG);

const biblioteca = new Biblioteca();

const livro1 = new Livro("Harry Potter e a Pedra Filosofal", "Rowling J.k.", "ROCCO", "9788532511010", "001", "001");

biblioteca.registrarItem(livro1);

biblioteca.listarAcervo();