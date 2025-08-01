# CT-019: Visualizar calendário com partidas salvas

## Objetivo
Verificar se o usuário consegue visualizar corretamente o calendário com as partidas que foram salvas/favoritadas.

## Pré-condições
- A aplicação está acessível.
- O usuário está autenticado.
- O usuário possui ao menos uma partida salva/favoritada.

## Passos
| Passo | Ação                                                        | Resultado Esperado                                                             |
|-------|-------------------------------------------------------------|---------------------------------------------------------------------------------|
| 1     | Fazer login na aplicação                                    | Usuário é autenticado com sucesso                                              |
| 2     | Acessar a aba ou menu "Calendário"                          | O calendário pessoal do usuário é exibido                                      |
| 3     | Verificar os dias marcados no calendário                    | Datas com partidas salvas estão destacadas                                     |
| 4     | Clicar em uma data com partida marcada                      | Detalhes da partida (time, horário, campeonato) são exibidos corretamente      |

## Resultado Esperado
O calendário exibe visualmente as partidas que o usuário salvou, com detalhes acessíveis ao clicar nas datas marcadas.


# CT-020: Adicionar partida ao calendário da Kasa.live

## Objetivo
Verificar se o usuário consegue adicionar uma partida ao calendário interno da plataforma.

## Pré-condições
- A aplicação está acessível.
- O usuário está autenticado.
- Há partidas disponíveis para serem adicionadas ao calendário.

## Passos
| Passo | Ação                                                      | Resultado Esperado                                                             |
|-------|-----------------------------------------------------------|---------------------------------------------------------------------------------|
| 1     | Fazer login na aplicação                                  | Usuário é autenticado com sucesso                                              |
| 2     | Navegar até a lista de partidas                           | A lista de partidas é exibida corretamente                                     |
| 3     | Clicar no ícone ou botão de adicionar ao calendário       | A partida é marcada como salva no calendário da Kasa.live                      |
| 4     | Acessar a aba "Calendário"                                | A partida adicionada aparece na data correta do calendário                     |

## Resultado Esperado
A partida selecionada é corretamente adicionada ao calendário da Kasa.live do usuário, com confirmação visual e persistência da informação.


# CT-021: Remover partida do calendário

## Objetivo
Verificar se o usuário consegue remover uma partida previamente adicionada ao calendário da Kasa.live.

## Pré-condições
- A aplicação está acessível.
- O usuário está autenticado.
- O usuário tem pelo menos uma partida salva no calendário.

## Passos
| Passo | Ação                                                        | Resultado Esperado                                                             |
|-------|-------------------------------------------------------------|---------------------------------------------------------------------------------|
| 1     | Fazer login na aplicação                                    | Usuário é autenticado com sucesso                                              |
| 2     | Acessar a aba "Calendário"                                  | O calendário com as partidas salvas é exibido corretamente                     |
| 3     | Selecionar a data com a partida salva                       | Os detalhes da partida adicionada são exibidos                                 |
| 4     | Clicar no botão ou ícone de "Remover do calendário"         | A partida é removida da visualização e deixa de constar no calendário          |

## Resultado Esperado
A partida é removida com sucesso do calendário da Kasa.live e não aparece mais na interface do usuário.



# CT-022: Conectar com Google Calendar

## Objetivo
Verificar se o usuário consegue conectar sua conta da Kasa.live ao Google Calendar com sucesso.

## Pré-condições
- A aplicação está acessível.
- O usuário está autenticado.
- O navegador tem permissão para abrir popups e janelas de autenticação.

## Passos
| Passo | Ação                                                           | Resultado Esperado                                                             |
|-------|----------------------------------------------------------------|---------------------------------------------------------------------------------|
| 1     | Fazer login na Kasa.live                                       | Usuário autenticado com sucesso                                                |
| 2     | Acessar a área de configurações de calendário                  | Opção de integração com Google Calendar é exibida                              |
| 3     | Clicar no botão "Conectar com Google Calendar"                | Janela de autenticação do Google é aberta                                      |
| 4     | Selecionar a conta Google e conceder as permissões necessárias | A conta é vinculada com sucesso e uma mensagem de confirmação é exibida        |

## Resultado Esperado
A conta do Google é conectada com sucesso, com autorização explícita e persistência da integração na conta do usuário da Kasa.live.



# CT-023: Validar sincronização com Google Calendar

## Objetivo
Verificar se as partidas adicionadas ao calendário da Kasa.live também são corretamente sincronizadas com o Google Calendar do usuário.

## Pré-condições
- A aplicação está acessível.
- O usuário está autenticado.
- A conta do Google Calendar já está conectada à Kasa.live.
- Há pelo menos uma partida adicionada ao calendário da Kasa.live.

## Passos
| Passo | Ação                                                       | Resultado Esperado                                                              |
|-------|------------------------------------------------------------|----------------------------------------------------------------------------------|
| 1     | Fazer login na Kasa.live                                   | Usuário autenticado com sucesso                                                 |
| 2     | Confirmar que a conta do Google Calendar está conectada    | Status de integração exibido corretamente                                       |
| 3     | Adicionar uma nova partida ao calendário da Kasa.live      | Partida aparece na visualização do calendário da Kasa.live                      |
| 4     | Acessar o Google Calendar com a conta vinculada            | A mesma partida está registrada na data e hora correta no Google Calendar       |

## Resultado Esperado
A sincronização é feita corretamente e as partidas da Kasa.live são refletidas no Google Calendar do usuário de forma automática e precisa.



# CT-024: Falha na conexão com Google Calendar (ex: conta inválida)

## Objetivo
Verificar se a aplicação trata adequadamente os erros durante a tentativa de conexão com o Google Calendar, como conta inválida, cancelamento do login ou falha na autenticação.

## Pré-condições
- A aplicação está acessível.
- O usuário está autenticado.
- O navegador permite popups, mas o processo de autenticação será interrompido ou falhará.

## Passos
| Passo | Ação                                                                 | Resultado Esperado                                                              |
|-------|----------------------------------------------------------------------|----------------------------------------------------------------------------------|
| 1     | Fazer login na Kasa.live                                             | Usuário autenticado com sucesso                                                 |
| 2     | Navegar até a área de integração com Google Calendar                 | Opção de conexão visível                                                        |
| 3     | Clicar no botão "Conectar com Google Calendar"                       | Janela de autenticação do Google é exibida                                      |
| 4     | Simular falha: negar permissão, usar conta inválida ou cancelar     | A integração falha e uma mensagem clara de erro é exibida                       |

## Resultado Esperado
A aplicação detecta corretamente a falha na tentativa de conexão e apresenta um feedback claro ao usuário, sem travar o sistema ou perder contexto.
