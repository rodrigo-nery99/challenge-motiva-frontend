# Motiva Campo

Plataforma web em React + Vite que apoia o profissional de campo da Motiva Rodovias na consulta da situação dos trechos e no registro de ocorrências por voz.

Projeto do Challenge Motiva — FIAP, turma 2TIAPR, disciplina Front End & Mobile Development (Sprint 1).

Nesta primeira sprint, os dados são fixos e as interações de voz são simuladas. O agente de voz será integrado nas próximas sprints.

## Problema

Durante a inspeção da rodovia, o profissional precisa interromper o trabalho para consultar a situação de um trecho ou registrar uma ocorrência (vegetação alta, buraco, placa danificada). Isso atrasa os registros e aumenta o tempo de exposição ao risco, já que ele trabalha ao lado do tráfego.

## Usuário

Inspetores de tráfego e técnicos de conservação que atuam em campo, geralmente com as mãos ocupadas e usando o celular.

## Pré-requisitos

- [Node.js](https://nodejs.org) versão 20.19 ou superior, ou 22.12 ou superior (o npm já vem junto)
- [Git](https://git-scm.com)

Para conferir a versão instalada do Node, rode `node -v`.

## Como executar

```bash
git clone https://github.com/rodrigo-nery99/challenge-motiva-frontend.git
cd challenge-motiva-frontend
npm install
npm run dev
```

Depois, abra http://localhost:5173 no navegador.

O `npm install` baixa automaticamente todas as dependências listadas no `package.json`:

- **react** e **react-dom**: biblioteca usada para construir a interface
- **vite** e **@vitejs/plugin-react**: servidor de desenvolvimento e geração da versão final
- **eslint** e plugins: verificação de erros no código

Outros comandos disponíveis:

| Comando | O que faz |
|---|---|
| `npm run build` | Gera a versão final do site na pasta `dist` |
| `npm run preview` | Abre a versão final gerada pelo build |
| `npm run lint` | Verifica o código em busca de erros |

## Estrutura de pastas

```
src/
  components/   Header, Nav, CardTrecho, CardInteracao
  pages/        Inicio, Consultas, Interacoes
  data/         trechos.js, interacoes.js (dados fixos)
  utils/        formatarData.js
  assets/       logo da Motiva
  App.jsx       navegação entre as telas com useState
  index.css     estilos e cores da Motiva
```
## 