# Kasa Live Test

Este repositório contém a suíte de testes automatizados da aplicação Kasa.live, implementada com o framework Cypress. O objetivo é assegurar a estabilidade dos principais fluxos da aplicação por meio de testes end-to-end (E2E) organizados de forma modular.

## Tecnologias

- Node.js v20.10.0 
- npm 10.2.3
- Cypress 14.5.3  
- JavaScript (ES6+)

> **Observação:** Verifique as versões instaladas rodando `node -v`, `npm -v` e `npx cypress --version`.

## Estrutura do Projeto

```
kasa-live-test/
├── .github/
│   └── workflows/
│       └── e2e.yml       # Pipeline do GitHub Actions para testes automatizados
├── cypress/              # Suite de testes Cypress
│   ├── fixtures/         # Dados estáticos para simulação
│   ├── integration/      # Testes de fluxo E2E (specs)
│   ├── support/          # Comandos e configurações globais
│   └── cypress.config.js # Configuração do Cypress
├── Teste_Cases/          # Documentação de casos de teste (Markdown)
├── package.json          # Dependências e scripts
├── .gitignore
└── README.md             # Documentação do projeto
```
## Instalação

1. Clone este repositório  
   
bash
   git clone https://github.com/LucasChagasAlmeida/kasa-live-test.git
   cd kasa-live-test

2. Instale as dependências  
   
bash
   npm install

3. Verifique as versões  
   
bash
   node -v
   npm -v
   npx cypress --version


## Como Executar os Testes

- Para abrir a interface interativa do Cypress:  
  ```bash
  npx cypress open
  ```
- Para executar todos os testes em linha de comando:  
  ```bash
  npx cypress run
  ```
- Para executar um caso de teste específico:  
  ```bash
  npx cypress run --spec "cypress/integration/seu-teste.spec.js"
  ```

## Organização dos Casos de Teste

- Os testes E2E ficam em `cypress/integration` e seguem a convenção `<fluxo>-<cenário>.spec.js`.
- Os dados simulados (fixtures) ficam em `cypress/fixtures`.
- Comandos customizados e configurações globais ficam em `cypress/support`.

A pasta `Teste_Cases` reúne a documentação em Markdown que descreve cada cenário manualmente planejado.

## Integração com GitHub Actions

Este projeto utiliza **GitHub Actions** para rodar os testes automatizados de forma contínua a cada push no repositório.

### 📄 Arquivo do pipeline

O arquivo de configuração do pipeline está localizado em:

```
.github/workflows/e2e.yml
```

### ⚙️ O que o pipeline faz:

- Instala as dependências (Node.js, Cypress)
- Executa os testes via linha de comando (`npx cypress run`)
- Garante que todos os testes passem antes de aceitar contribuições

### ▶️ Execução Automática

Os testes são executados automaticamente:

- Sempre que houver um `push` para a branch `main`
- Sempre que for aberto um `pull request`

Você pode acompanhar a execução dos workflows em:  
**GitHub → Actions → e2e**

---

Se desejar rodar localmente como o GitHub Actions faz, basta executar:

```bash
npx cypress run
```