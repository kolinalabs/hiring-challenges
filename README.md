PART III
========

# Instalação

  - 1. clonando o repositório

  ```
  $ git clone
  ```

  - 2. iniciando banco de dados

  ```
  $ mysql -u root -pkolina -e 'CREATE DATABASE kolina'
  $ mysql -u root -pkolina kolina < backend/query.sql
  ```

  - 3. iniciando a aplicação backend

  ```
  $ cd backend
  $ yarn install
  $ yarn start
  ```

  - 4. iniciando a aplicação frontend

  ```
  $ cd frontend
  $ yarn install
  $ yarn start
  ```


# Tasks

  As tarefas estão dívidas em três grupos:

    - Grupo I: Tarefas de ajustes em interfaces
    - Grupo II: Manipulação básica de frontend
    - Grupo III: Manipulação básica de backend

  Sinta-se livre para começar por quais achar mais conveniente:


  ## Grupo I - Tarefa I

    Em tela de erro 404, corrigir data de `2017` para `2018`.


  ## Grupo I - Tarefa II

    Em tela de erro 404:

      - Centralizar conteúdo da página na vertical e horizontal.

    > **Dica**: utilizar dev tool de navegador para simulação de tamanhos de telas.


  ## Grupo I - Tarefa III

    Na estrutura Frontend, com Vue.js utilizamos um componente de tabela (Table), para exibir dados em duas páginas.

      - Na página de métricas (Metric.vue, localhost:8080/#/metrics) ambas as tabelas devem ser posicionadas lado a lado.
      - Alinhar o conteúdo da primeira coluna de cada tabela à esquerda.


  ## Grupo II - Tarefa I

    Em página de métricas (Metric.vue, localhost:8080/#/metrics), a segunda tabela, que contêm dados de labels.

      - Deve exibir dados de labels vindos da rota `localhost:8000/metrics/labels`


  ## Grupo II - Tarefa II

    Em página de usuários (User.vue, localhost:8080/#/users), a tabela que contém dados de usuários:

      - Devem ser exibidos apenas usuários ativos


  ## Grupo II - Tarefa III

    Em cabeçalho de página de métricas (Metric.vue, localhost:8080/#/metrics):

      - O dia de semana deve ser exibido dinâmicamente, em português, substituindo o conteúdo estático `domingo`.


  ## Grupo II - Tarefa IV

    Em página de métricas (Metric.vue, localhost:8080/#/metrics), a primeira tabela, que contêm dados de milestones:

      - Em coluna `concluídas/total`, deve ser exibido valor de porcentagem de conclusão total ao invés de número de tarefas concluídas/total.

      > *Obs.*: você não deve mexer na estrutura da váriavel de mock do backend


  ## Grupo III - Tarefa I


    Em rota de usuários (localhost:3000/users/:id):

      - Corrigir erro ao exibir dados de um único usuário.
    
      > *Info*: considerando que `:id` representa o id do usuário na rota, utilize o `id` 1 para testes


  ## Grupo III - Tarefa II

    Em banco de dados, na tabela de usúarios (app_user):

      - Modificar status de usuário de id 2 para ativo
      - Remover usuário registrado em banco com id 3
      - Adicionar novo usuário fictício com status ativo


  ## Grupo III - Tarefa III

    em rota de métricas de labels (localhost:3000/metrics/labels):

      - Implementar rota de consulta de única label (localhost:3000/metrics/labels/:id)
