# Cidade Alta - Desafio de Sistema de Login e Resgate de Emblemas

Este repositório contém a solução do desafio requisitado para o processo seletivo da empresa Cidade Alta. O desafio consiste na implementação de um sistema de login e resgate de emblemas. A aplicação é dividida em frontend e backend, desenvolvidos com tecnologias modernas e boas práticas.

## Visão Geral

A aplicação consiste em um sistema onde os usuários podem se registrar, fazer login e resgatar emblemas. O frontend foi desenvolvido em React e o backend em NestJS com Typescript, utilizando Prisma para o gerenciamento do banco de dados.

## Tecnologias Utilizadas

### Frontend
- React
- Axios
- Context API
- TypeScript

### Backend
- NestJS
- TypeScript
- Prisma
- Swagger
- JWT Token
- Rate Limit

## Estrutura do Projeto

### Frontend
A estrutura do frontend é organizada da seguinte forma:

- **@types**: Contém as interfaces da aplicação.
- **api**: Configuração das requisições utilizando Axios.
- **component**: Componentes reutilizáveis.
- **config**: Dados estáticos consumidos pelo frontend.
- **context**: Contém os hooks `useAuth` e `useNotify`.
- **pages**: Todas as páginas da aplicação.

O arquivo `router.tsx` contém toda a lógica de renderização das páginas.

### Backend
O backend foi desenvolvido em NestJS com a seguinte estrutura:

- **prisma**: Contém o schema do banco de dados.
- **src**
  - **exceptions**: Contém todas as exceções personalizadas.
  - **modules**
    - **emblems**: Módulo de emblemas, contendo DTOs, casos de uso e o padrão MVC.
    - **user**: Módulo de usuários, contendo DTOs, casos de uso e o padrão MVC.

O arquivo `app.module.ts` contém todos os módulos da aplicação.

## Planejamento de Desenvolvimento

- 10/06/2024 | Iniciando desenvolvimento UI no Figma.
- 11/06/2024 | Iniciando desenvolvimento front-end no React.
- 12/06/2024 | Iniciando desenvolvimento back-end no NestJS, desenvolvendo a parte de login e registro.
- 13/06/2024 | Iniciando desenvolvimento front-end no React, desenvolvendo a parte da dashboard.
- 14/06/2024 | Iniciando desenvolvimento back-end no NestJS, desenvolvendo a parte da dashboard.
- 14/06/2024 | Fim do desenvolvimento.

## Instalação e Execução

### Frontend
1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```
2. Navegue até o diretório do frontend:
    ```bash
    cd frontend
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```
4. Inicie a aplicação:
    ```bash
    npm start
    ```

### Backend
1. Navegue até o diretório do backend:
    ```bash
    cd backend
    ```
2. Instale as dependências:
    ```bash
    npm install
    ```
3. Configure as variáveis de ambiente no arquivo `.env`.

4. Execute as migrações do Prisma:
    ```bash
    npx prisma migrate dev
    ```
5. Inicie a aplicação:
    ```bash
    npm run start:dev
    ```

## Endpoints
A documentação completa dos endpoints está disponível via Swagger. Para acessá-la, inicie o backend e abra o seguinte endereço no navegador:

```bash
  http://localhost:3000/api
```


## Contribuição

Se você deseja contribuir com este projeto, siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma branch para sua feature:
    ```bash
    git checkout -b feature/minha-feature
    ```
3. Commit suas mudanças:
    ```bash
    git commit -m 'Adiciona minha feature'
    ```
4. Faça um push para a branch:
    ```bash
    git push origin feature/minha-feature
    ```
5. Abra um Pull Request.


