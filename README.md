> ## ⚠️ Projeto ainda não está finalizado!

# Plataforma Educacional inspirada no tema da Netflix - Frontend (Next.js)

Este é o Frontend do projeto desenvolvido em ***Next.js***.

## Sobre o Projeto

A plataforma educacional é composta por:
- Frontend em Next.js (Este repositório aqui!)
- [Backend em Node.js](https://github.com/patrick-cuppi/educational-platform-backend)

### Componentes do Sistema

- **Frontend (Next.js)**
  - Interface do usuário para criação de conta e interação com os cursos
  - Lista dos últimos episódios assistidos e lista com os episódios que mais gostou
  - Desenvolvido com Next.js para garantir performance e boa experiência do usuário

- **Backend (Node.js)**
  - Gerencia contas dos usuários e dos cursos
  - Controla a evolução do usuário, salvando os últimos episódios assistidos
  - Controla a lista dos episódios que o usuário mais gostou
  - Painel administrativo para gerenciamento dos cursos

## Fluxo de Comunicação

1. Frontend realiza requisições para a API via REST
2. API processa as requisições e retorna os dados

## Ordem de Execução dos Serviços

Para executar o projeto completo, os serviços devem ser iniciados na seguinte ordem:

1. **API (Node.js)** - Deve ser executado primeiro pois configura o banco de dados
2. **Frontend (Next.js)** - Interface de usuário que se comunica com a API

## Instruções Detalhadas

Cada componente do sistema possui instruções específicas de instalação e configuração em seus repectivos repositórios:

- **Frontend em Next.js**: Este repositório aqui. Setup do projeto abaixo!
- **API em Node.js**: Consulte o README na pasta do projeto [(clique aqui)](https://github.com/patrick-cuppi/educational-platform-backend).

## Arquitetura da aplicação
![Visualize a arquitetura completa aqui](/public/db_schema.png)

## Pré-requisitos

- [Node.js](https://nodejs.org/en)
- [Backend do projeto](https://github.com/patrick-cuppi/educational-platform-backend/)

## Setup do Projeto

1. Clone o repositório - backend:
```bash
git clone https://github.com/patrick-cuppi/educational-platform-backend
cd educational-platform-backend
npm install
```

2. Clone o repositório - frontend:
```bash
git clone https://github.com/patrick-cuppi/educational-platform-frontend
cd educational-platform-frontend
npm install
```

3. Execute o comando para rodar a aplicação backend:
```bash
npm run dev
```

3. Verifique se o banco está rodando:
```bash
# para listar os serviços PostgreSQL e verificar se estão em execução:
net start postgresql
# e para obter informações detalhadas:
sc query postgresql
```

4. Caso esteja utilizando docker:
```bash
# para rodar a aplicação a partir do arquivo docker-compose.yml
docker-compose up -d
# para verificar os containers:
docker ps
```
> ⚠️ Qualquer dúvida que você possua em relação a containers e Docker, recomendo ler a [documentação](https://docs.docker.com/) deles. 

5. Execute o comando para rodar a aplicação frontend:
```bash
npm run dev
```
O backend estará disponível em `http://localhost:3030`.
O frontend estará disponível em `http://localhost:3000` e integrado ao backend.

## Funcionalidades

### Autenticação
- Login via API com senha criptografada e autenticação utlizando JWT
- Proteção de rotas via middleware

## Tecnologias Utilizadas

- Next.js v.15
- TypeScript (linguagem utilizada para desenvolvimento)
- Tailwind (para estilização)