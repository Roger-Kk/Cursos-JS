# JavaScript

Repositório para aprendizado de JavaScript. Cursos Alura JavaScript.

Cada pasta refere-se a um curso em linguagem predominante JavaScript, com os arquivos de código para seu devido fim.

## Fundamentos da linguagem

- `Logica JS/` — primeiros passos com lógica de programação e JavaScript.
- `Introdução Arrays/` — percorrer arrays com `for` e métodos básicos (`02_arrayFor.js`, `02_arrayMetodos.js`).
- `Objetos - Fundamentos/` — objetos, iteração, funções, tipos e manipulação de JSON.
- `Evoluindo com ES6+` — recursos modernos da linguagem aplicados ao projeto Memoteca.

## Arrays e algoritmos

- `Métodos de Array/` — métodos de array aplicados a uma aplicação com requisições.
- `Algoritmos Ordenação e Busca/` — arrays ordenados, busca e `quickSort`.

## DOM e páginas dinâmicas

- `Manipulando elementos DOM/` — manipulação de elementos da página com som e estilos.
- `Construindo Páginas Dinâmicas/` — lista de compras dinâmica, com inserção, edição e exclusão de itens.
- `Páginas Dinâmicas/` — construção de páginas com conteúdo gerado em JavaScript.
- `Local Storage/` — persistência de dados no navegador, com scripts de CRUD.
- `Reconhecimento de Voz/` — uso da Web Speech API para reconhecer comandos de voz e sortear números.

## Requisições e assincronismo

- `Consumindo API/` — consumo de API com `backend/`, `index.html` e `script.js`.
- `CRUD - Requisições HTTP/` — projeto Memoteca com Fetch API, Axios e JSON Server para cadastrar, listar, editar e excluir pensamentos.
- `Promisses, Async, Await/` — promessas e código assíncrono com `async`/`await`.

## Orientação a objetos e Node

- `Orientação a Objetos/` — classes (`User.js`, `Admin.js`, `Docente.js`), construtor com `new` e objeto literal.
- `Node - Primeira Biblioteca/` — primeiro pacote Node, com `package.json`, `src/` e arquivos de apoio.

## Frameworks e projetos

- `Vue Componentes e Diretivas/` — componentes e diretivas no Vue, projeto `cookin-up/`.
- `Vue Design Tracker/` — aplicação `design-tracker/` em Vue.
- `Asset RPA/` — tela inicial (`telaInicial.html`) para automação.

## Como rodar

Os exemplos se dividem em dois tipos, e o comando muda conforme o caso.

**Páginas no navegador** — a maioria das pastas tem um `index.html`. Abra com a extensão **Live Server** do VS Code (botão direito no arquivo → *Open with Live Server*), ou simplesmente dê duplo clique no arquivo.

**Projetos com backend fake** — `CRUD - Requisições HTTP`, `Evoluindo com ES6+` e `Consumindo API` dependem do **Node.js** e de um JSON Server. Instale as dependências e suba o servidor na pasta do curso:

```bash
cd "CRUD - Requisições HTTP"
npm install
npx json-server --watch backend/db.json


