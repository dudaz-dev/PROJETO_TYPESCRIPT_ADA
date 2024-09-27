# 📚 Biblioteca Online com TypeScript

Este projeto é uma simulação de um sistema de gerenciamento de uma biblioteca, desenvolvido em TypeScript. Ele permite o cadastro, atualização, remoção e controle de disponibilidade de diferentes tipos de itens do acervo, como livros, revistas, CDs e DVDs. O projeto usa conceitos de Programação Orientada a Objetos (POO), garantindo a organização do código e a segurança através da tipagem estática.

## 🌟 Funcionalidades Principais

### 1. **Gerenciamento do Acervo**
- **Cadastro de Itens:** Adicionar novos itens ao acervo, como livros, revistas, CDs e DVDs.
- **Edição de Itens:** Atualizar informações dos itens cadastrados.
- **Remoção de Itens:** Remover itens do acervo, verificando se há empréstimos ativos antes de concluir a remoção.
- **Controle de Disponibilidade:** Visualizar e controlar a disponibilidade dos itens, distinguindo entre itens disponíveis e emprestados.

### 2. **Classes e Interfaces**
- **ItemAcervo (Classe Abstrata):** Base para todos os itens do acervo.
- **Publicacao e Midia (Superclasses Intermediárias):** Categorizam os itens em publicações (livros, revistas) e mídias (CDs, DVDs).
- **Localizavel (Interface):** Implementada por itens que possuem uma localização física na biblioteca.
- **RegistrarItem (Função Genérica):** Função genérica para adicionar qualquer tipo de `ItemAcervo` ao acervo, garantindo a tipagem correta.

## 🛠️ Tecnologias Utilizadas

- **TypeScript:** Tipagem estática e organização do código.
- **Node.js:** Ambiente de execução.
- **ES6 Modules:** Para modularização e melhor manutenção do código.

## ⚙️ Instalação e Execução

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/biblioteca-online.git
   ```

2. **Navegue até a pasta do projeto**:

   ```bash
   cd biblioteca-online
   ```

3. **Instale as dependências**:

   Certifique-se de que você tenha o Node.js e o npm instalados em sua máquina. Em seguida, execute:

   ```bash
   npm install
   ```

4. **Compile o TypeScript**:

   Para compilar o código TypeScript para JavaScript:

   ```bash
   npx tsc
   ```

5. **Execute o projeto**:

   Após a compilação, execute o projeto com Node.js:

   ```bash
   chcp 65001
   ```

   ```bash
   node dist/index.js
   ```

## Desenvolvedores 👩‍💻

Desenvolvido com 💚 por **Equipe 04**: Vanessa Misiti, Vitor Dioro, Maria Eduarda, Lucas Lourenço.

## 📝 Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais informações.

