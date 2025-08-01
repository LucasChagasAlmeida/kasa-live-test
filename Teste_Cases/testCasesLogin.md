# CT-001: Cadastro de novo usuário

## Objetivo
Validar que o usuário pode se cadastrar com dados válidos através do formulário de cadastro manual.

## Pré-condições
- A aplicação está acessível.
- O e-mail `test@test.com` **não** está vinculado a nenhuma conta existente.
- O usuário está desconectado.

## Passos
| Passo | Ação                                                  | Resultado Esperado                                                        |
|-------|--------------------------------------------------------|---------------------------------------------------------------------------|
| 1     | Acessar a página inicial da Kasa.live                  | Página inicial é exibida corretamente                                    |
| 2     | Clicar no botão "Entrar" no canto superior direito     | Modal ou tela de cadastro é exibido                                      |
| 3     | Clicar no botão "Criar conta " em baixo do botão "Entrar"     | Modal ou tela de cadastro é exibido                                      |
| 4     | Preencher os campos: nome, e-mail, senha               | Os campos são preenchidos corretamente sem validações falhando           |
| 5     | Preencher o campo de confirmação de senha              | Os campo foi preenchido corretamente com a mesma string da senha         |
| 6     | Clicar no botão "Cadastrar"                            | Mensagem de sucesso é exibida e o usuário é redirecionado/logado         |

## Resultado Esperado
Usuário cadastrado com sucesso e autenticado automaticamente, sendo redirecionado para a tela principal ou painel de controle.



# CT-002: Cadastro com e-mail já existente

## Objetivo
Validar que o sistema exibe uma mensagem de erro ao tentar cadastrar um usuário com um e-mail já existente.

## Pré-condições
- A aplicação está acessível.
- Já existe uma conta cadastrada com o e-mail `teste@exemplo.com`.
- O usuário está desconectado.

## Passos
| Passo | Ação                                                  | Resultado Esperado                                                                |
|-------|--------------------------------------------------------|------------------------------------------------------------------------------------|
| 1     | Acessar a página inicial da Kasa.live                  | Página inicial é exibida corretamente                                              |
| 2     | Clicar no botão "Entrar" no canto superior direito| Modal de cadastro é exibido.
| 3     | Clicar no botão "Criar conta " em baixo do botão "Entrar"     | Modal ou tela de cadastro é exibido                                      |                                               |
| 4     | Preencher os campos: nome, e-mail `teste@exemplo.com`, senha | Os campos são preenchidos corretamente                                       |
| 5     | Preencher o campo de confirmação de senha              | Os campo foi preenchido corretamente com a mesma string da senha         |
| 6     | Clicar no botão "Cadastrar"                            | Uma mensagem de erro informando que o e-mail já está em uso deve ser exibida      |

## Resultado Esperado
O sistema bloqueia o cadastro e exibe uma mensagem de falha é exibida.

# CT-003: Login com credenciais corretas - Usuário registrado

## Objetivo
Validar que o usuário consegue acessar sua conta utilizando e-mail e senha válidos.

## Pré-condições
- A aplicação está acessível.
- Existe uma conta cadastrada com:
  - E-mail: `teste@exemplo.com`
  - Senha: `123456`
- O usuário está desconectado.

## Passos
| Passo | Ação                                                  | Resultado Esperado                                                           |
|-------|--------------------------------------------------------|-------------------------------------------------------------------------------|
| 1     | Acessar a página inicial da Kasa.live                  | Página inicial é exibida corretamente                                        |
| 2     | Clicar no botão "Entrar" no canto superior direito     | Modal de login é exibido                                             |
| 3     | Preencher os campos com e-mail e senha válidos         | Os campos são preenchidos corretamente                                       |
| 4     | Clicar no botão "Entrar"                               | O login é realizado com sucesso e o usuário é redirecionado à tela principal |

## Resultado Esperado
O usuário acessa sua conta com sucesso e visualiza sua sessão autenticada, incluindo as abas de favoritos e agenda.


# CT-004: Login com e-mail ou senha inválidos

## Objetivo
Verificar se o sistema impede o login quando o usuário insere um e-mail não cadastrado ou senha incorreta.

## Pré-condições
- A aplicação está acessível.
- Existe uma conta cadastrada com:
  - E-mail: `teste@exemplo.com`
  - Senha: `SenhaValida123`
- O usuário está desconectado.

## Passos
| Passo | Ação                                                  | Resultado Esperado                                                              |
|-------|--------------------------------------------------------|----------------------------------------------------------------------------------|
| 1     | Acessar a página inicial da Kasa.live                  | Página inicial é exibida corretamente                                           |
| 2     | Clicar no botão "Entrar" no canto superior direito     | Modal ou tela de login é exibido                                                |
| 3     | Preencher os campos com e-mail `teste@exemplo.com` e senha incorreta `senhaErrada` | Campos são preenchidos normalmente                         |
| 4     | Clicar no botão "Entrar"                               | O sistema não realiza o login e exibe uma mensagem de erro                       |
| 5     | Repetir o teste com um e-mail inválido (ex: `naoexiste@teste.com`) e senha qualquer | O sistema também bloqueia o login e exibe a mensagem de erro apropriada         |

## Resultado Esperado
O sistema exibe uma mensagem de falha, indicando o usuário a verificar a corretude do E-mail ou da senha e impede o acesso à conta.

# CT-005: Exclusão de conta - Usuário logado

## Objetivo
Verificar se o usuário autenticado consegue excluir sua conta permanentemente e se os dados são removidos de forma adequada.

## Pré-condições
- A aplicação está acessível.
- O usuário está autenticado na plataforma.
- A conta a ser deletada está ativa e operacional.

## Passos
| Passo | Ação                                                      | Resultado Esperado                                                             |
|-------|-----------------------------------------------------------|---------------------------------------------------------------------------------|
| 1     | Acessar a Kasa.live com uma conta válida                   | O usuário é autenticado e redirecionado à interface principal                  |
| 2     | Abrir o menu de perfil                                     | Tela de configurações com opções de perfil e segurança é exibida               |
| 3     | Clicar em "Excluir conta"                                  | Um Popup de confirmação é exibido solicitando a confirmação da ação            |
| 4     | Confirmar a exclusão da conta                              | Conta é removida, sessão é encerrada e o usuário é redirecionado à página inicial |
| 5     | Tentar fazer login novamente com o mesmo e-mail e senha    | O sistema informa que a conta não existe ou que as credenciais são inválidas   |

## Resultado Esperado
A conta do usuário é excluída com sucesso e todas as informações associadas são removidas. O login com os dados excluídos deve falhar.


# CT-006: Login via Google OAuth - Usuário registrado

## Objetivo
Validar que o usuário consegue se autenticar com sucesso utilizando sua conta do Google.

## Pré-condições
- A aplicação está acessível.
- O usuário possui uma conta Google válida.
- O navegador não está bloqueando pop-ups.
- O usuário está desconectado.

## Passos
| Passo | Ação                                                      | Resultado Esperado                                                                 |
|-------|-----------------------------------------------------------|-------------------------------------------------------------------------------------|
| 1     | Acessar a página inicial da Kasa.live                      | Página inicial é exibida corretamente                                              |
| 2     | Clicar no botão "Entrar" no canto superior direito         | Modal ou tela de login é exibida                                                  |
| 3     | Clicar em "Entrar com o Google"                            | Uma nova janela de autenticação do Google é exibida                       |
| 4     | Selecionar uma conta Google válida                        | Processo de autenticação é iniciado                                                |
| 5     | Conceder permissões,                        | O usuário é redirecionado de volta para o site                                     |
| 6     | Confirmar que o login foi efetuado com sucesso            | O usuário visualiza a interface logada da Kasa.live com seu

## Resultado Esperado
O usuário é autenticado via Google com sucesso e tem acesso completo à sua conta no Kasa.live.
