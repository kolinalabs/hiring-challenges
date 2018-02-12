<template>
  <div class="page">
    <header class="header">
      <h1 class="title">Usuários</h1>
    </header>
    <section>
      <Table>
        <h2 slot="title">
          Sices Solar
          <span>Profissionais vínculados ao projeto</span>
        </h2>
        <tr slot="head">
          <th>Nome</th>
          <th>Cargo</th>
        </tr>
        <tr
          slot="rows"
          v-for="user in users">
          <td>{{ user.name }}</td>
          <td>{{ user.role }}</td>
        </tr>
      </Table>
    </section>
  </div>
</template>

<script>
  export default {
    data: () => ({
      users: []
    }),
    mounted() {
      fetch('http://localhost:3000/users')
        .then(x => x.json())
        .then(x => { this.users = x })
    }
  }
</script>

<style scoped>
  .page {
    padding: 8px;
  }

  .header {
    background-color: #ffffff;
    display: block;
    padding: 15px;
  }

  .title {
    font-weight: 300;
    margin: 0;
  }
</style>
