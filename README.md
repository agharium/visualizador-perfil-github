# Visualizador de Perfil do GitHub

Um projeto simples em HTML, CSS e JavaScript que permite pesquisar um usuário do GitHub e visualizar seu perfil e repositórios mais recentes.

## Funcionalidades

- Busca de usuário por nome de usuário do GitHub
- Exibição de informações do perfil:
  - avatar
  - nome completo
  - bio
  - número de seguidores e seguindo
- Listagem de até 10 repositórios do usuário
- Cada repositório inclui:
  - nome
  - stars
  - forks
  - watchers
  - linguagem
- Link direto para o repositório no GitHub
- Busca também é acionada ao pressionar `Enter`

## Tecnologias usadas

- HTML
- CSS
- JavaScript (módulos ES6)
- Fetch API
- GitHub REST API

## Estrutura do projeto

- `index.html` — página principal
- `src/css/` — estilos e responsividade
  - `reset.css`
  - `styles.css`
  - `responsive.css`
  - `animations.css`
- `src/js/` — lógica de aplicação
  - `api.js` — chamadas à API do GitHub
  - `ui.js` — renderização da interface e exibição de estados
  - `index.js` — gerenciamento de eventos e fluxo principal

## Endpoints utilizados

- Perfil do usuário:
  - `GET https://api.github.com/users/:username`
- Repositórios do usuário:
  - `GET https://api.github.com/users/:username/repos?per_page=10&sort=created`

## Uso

1. Abra o arquivo `index.html` no navegador.
2. Digite um nome de usuário do GitHub no campo de pesquisa.
3. Clique em `Buscar` ou pressione `Enter`.
4. Veja os dados do perfil e os repositórios exibidos na tela.

## Observações

- A aplicação não usa backend próprio; todas as requisições são feitas diretamente para a API pública do GitHub.
- Se o nome do usuário for inválido ou não existir, o app exibe uma mensagem de erro.

## Contribuições

Contribuições e melhorias são bem-vindas. Para ampliar o projeto, você pode adicionar:

- filtro por linguagem ou número de stars
- paginação nos repositórios
- pesquisa por mais informações do usuário
- modo escuro

---

Projeto criado para visualização rápida de perfis de GitHub usando JavaScript e API pública.
