# 📊 Kasa Live - Testes Automatizados com Cypress

Este repositório contém a suíte de testes automatizados da plataforma **Kasa.live**, desenvolvida com o framework [Cypress](https://www.cypress.io/). O objetivo é garantir a estabilidade e a confiabilidade da aplicação por meio de testes end-to-end (E2E), além de documentar os principais fluxos e comportamentos esperados do sistema.

---

## 🧪 Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) — Framework de testes E2E
- [Node.js](https://nodejs.org/) — Ambiente de execução JavaScript
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 📁 Estrutura do Projeto

kasa-live-test/
├── cypress/ # Testes automatizados (specs, fixtures, support)
├── Teste_Cases/ # Documentação de casos de teste (em Markdown ou similar)
├── cypress.config.js # Configuração do Cypress
├── package.json # Dependências e scripts
├── .gitignore
└── README.md

yaml
Copiar
Editar


---

## 🚀 Como executar os testes

### 1. Clone o repositório

```bash
git clone https://github.com/LucasChagasAlmeida/kasa-live-test.git
cd kasa-live-test

npm install

npx cypress open
