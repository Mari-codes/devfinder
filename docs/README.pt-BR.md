# devfinder

## Leia em outros idiomas
- [English](../README.md)

devfinder é uma aplicação web responsiva construída com **React + Vite** e **JavaScript** que permite buscar perfis do GitHub e visualizar informações detalhadas sobre eles. Ela utiliza a API do GitHub para fornecer uma interface limpa e intuitiva para explorar perfis de desenvolvedores.

Confira o projeto rodando aqui: [devfinder no Vercel](https://mari-devfinder.vercel.app/)

---

## Funcionalidades

- **Buscar Usuários do GitHub**: Encontre qualquer usuário do GitHub pelo nome de usuário.
- **Informações do Perfil**: Exibe foto, nome, nome de usuário, bio, data de criação, seguidores, repositórios, localização, local de trabalho e site pessoal.
- **Temas**: Disponíveis nos modos claro e escuro, com preferências salvas no local storage.
- **Design Responsivo**: Totalmente otimizado para desktop, tablet e dispositivos móveis.
- **Tela de Carregamento**: Tela inicial de loading para uma experiência mais fluida.

---

## Stack Tecnológica

| Tecnologia         | Finalidade                                |
|--------------------|-------------------------------------------|
| **React + Vite**   | Configuração da aplicação e interface     |
| **JavaScript**     | Lógica e gerenciamento de estado          |
| **Axios**          | Cliente HTTP para requisições à API       |
| **Scss**           | Estilização                               |
| **CSS Modules**    | Estilos escopados por componente          |
| **Metodologia BEM**| Estrutura de CSS organizada e sustentável |
| **SVGR**           | Manipulação de SVGs                       |
| **ESLint & Prettier** | Qualidade e formatação de código       |

---

## Primeiros Passos

### Pré-requisitos
- Node.js (>= 14.x)
- npm ou yarn

### Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/devfinder.git
   ```
2. Navegue até a pasta do projeto:
   ```bash
   cd devfinder
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
   ou
   
   ```bash
   yarn install
   ```
## Executando o Projeto

```sh
npm run dev
```
ou
```bash
yarn dev
```

## Screenshots

### Loading (Light & Dark Mode)
![Loading Light](/src/assets/screenshots/loading-light.png)
![Loading Dark](/src/assets/screenshots/loading-dark.png)

### Home (Modo Claro)
![Home Light](/src/assets/screenshots/home-light.png)

### Perfil do Usuário
![Profile](/src/assets/screenshots/profile.png)

### Usuário Não Encontrado
![User Not Found](/src/assets/screenshots/user-not-found.png)

### Perfil (Modo Escuro)
![Dark Mode](/src/assets/screenshots/profile-dark.png)
